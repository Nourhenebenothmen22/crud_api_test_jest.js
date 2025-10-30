const User = require("../models/user.model");
// tests/user.test.js
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

beforeAll(async () => {
  // 🔴 Si une connexion existe déjà, on la ferme
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  // 🟢 Ensuite, on connecte à la base test
  await mongoose.connect("mongodb://127.0.0.1:27017/crud_jest_test");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});


describe("User CRUD API", () => {
  let userId;

  it("POST /api/users → should create a user", async () => {
    const res = await request(app).post("/api/users").send({
      name: "John Doe",
      email: "john@example.com",
      age: 25
    });
    expect(res.statusCode).toBe(201);
    userId = res.body._id;
  });

  it("GET /api/users → should return users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("PUT /api/users/:id → should update a user", async () => {
    const res = await request(app).put(`/api/users/${userId}`).send({ age: 30 });
    expect(res.statusCode).toBe(200);
    expect(res.body.age).toBe(30);
  });

  it("DELETE /api/users/:id → should delete a user", async () => {
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User deleted");
  });
});
