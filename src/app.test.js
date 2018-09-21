const request = require("supertest");
const app = require("./app");

describe("GET /generate without a string", () => {
  it("should return a 404 status code", async () => {
    const res = await request(app).get("/generate");
    expect(res.status).toBe(404);
  });
  it("should return an error with a description", async () => {
    const res = await request(app).get("/generate");
    expect(res.body).toEqual({ error: "Not found" });
  });
});
describe("GET /generate/:string ", () => {
  it("should return a 200 status code", async () => {
    const res = await request(app).get("/generate/test");
    expect(res.status).toBe(200);
  });
  it("should return a JSON with the encoded string", async () => {
    const res = await request(app).get("/generate/test");
    expect(Object.keys(res.body)).toEqual(["value"]);
  });
});
