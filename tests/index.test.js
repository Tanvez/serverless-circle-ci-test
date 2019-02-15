const chai = require("chai");
const handler = require("../index").hello;
const { expect } = chai;
it("returns 200", async () => {
  const res = await handler("test", null, (err, result) => result);
  expect(res.statusCode).to.equal(200);
});
