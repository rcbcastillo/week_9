const chai = require('chai');
const chaiHttp = require('chai-http');
const { catModel } = require('../db');
chai.use(chaiHttp);

const server = require('../index.js')
const mongoose = require('mongoose');


describe("API tests", () => {

  let testCat;
  beforeEach(async () => {
    await catModel.deleteMany({})// loops to delete everything
    testCat = await catModel.create({ name: "jackie", color: "white", evil: false })
  })

  it("should getAll cats", (done) => {
    chai.request(server).get('/cats/getAll')
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body[0]).to.include({ name: "jackie", color: "white", evil: false })
        chai.expect(res.status).to.equal(200);
        done();
      })
  })

  it("should create a cat", (done) => {
    chai.request(server).post('/cats/create')
      .send({ name: "spidey", color: "white", evil: false })
      .end((err, res) => {
        chai.expect(err).to.be.null;// catch error
        chai.expect(res.body).to.include({ name: "spidey", color: "white", evil: false })
        chai.expect(res.status).to.equal(201);
        done();
      })
  })

  it("should delete a cat", (done) => {
    chai.request(server).delete(`/cats/delete/${testCat._id}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;// catch error
        chai.expect(res.body).to.include({ name: "jackie", color: "white", evil: false })
        chai.expect(res.status).to.equal(200);
        done();
      })
  })

  it("should delete a cat", (done) => {
    chai.request(server).delete(`/cats/delete/${testCat._id}`)
      .end((err, res) => {
        chai.expect(err).to.be.null;// catch error
        chai.expect(res.body).to.include({ name: "jackie", color: "white", evil: false })
        chai.expect(res.status).to.equal(200);
        done();
      })
  })

  it("should update a cat", (done) => {
    chai.request(server).patch(`/cats/update/${testCat._id}`)
      .query({ name: "jiggle", color: "brown", evil: true })
      .end((err, res) => {
        chai.expect(err).to.be.null;// catch error
        chai.expect(res.body).to.include({ name: "jiggle", color: "brown", evil: true })
        chai.expect(res.status).to.equal(200);
        done();
      })
  })



  // it("should delete a cat", (done) => {
  //   chai.request(server).delete('/cats/delete')
  //   .send()
  // })

  after(async () => {
    await mongoose.disconnect();
  })
}
);

