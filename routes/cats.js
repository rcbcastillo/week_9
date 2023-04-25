//collections of routes
const router = require('express').Router(); // has a collection of routes
const { catModel } = require('../db');

const cats = [];

router.get('/getAll', async (req, res) => { res.json(await catModel.find({})) });

router.post('/create', async (req, res, next) => { // req.body is a javascript object that contains all the data needed to create a new cat
  try {
    const { body } = req;
    console.log(body);
    const newCat = await catModel.create(body);
    // after created we send it back
    res.status(201).json(newCat);
  } catch (error) {
    return next({
      status: 500, msg: 'oops'
    })
  }
})

router.patch('/update/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const catToUpdate = await catModel.findByIdAndUpdate(id, req.query, { returnDocument: "after" })
    res.json(catToUpdate);
  } catch (error) {
    return next({
      status: 500, msg: 'oops'
    })
  }

})

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const catToDelete = await catModel.findByIdAndDelete(id);
  res.json(catToDelete);
});




module.exports = router;