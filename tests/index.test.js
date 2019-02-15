const chai = require("chai");
const { handler } = require("../index");
const { expect } = chai;
it("returns 200", async () => {
  const res = await handler("Hi", null, (err, result) => result);
  expect(res.statusCode).to.equal(200);
});
