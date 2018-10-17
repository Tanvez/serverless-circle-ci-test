const chai = require("chai")
const myLambda = require("./handler")
const { expect } = chai
it("returns 200", async () => {
  const res = await myLambda.hello()
  expect(res.statusCode).to.equal(200)
})
