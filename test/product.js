const chai = require("chai");
const assert = chai.assert;
const should = chai.should();
const Product = require("../models/product")

describe("the Product model", () => {
    it("should be a valid mongoose model", () => {
        assert.exists(Product, "Product model exists");
        assert.isFunction(Product), "Product has correct type";
        Product.should.have.property("name");
    })
})