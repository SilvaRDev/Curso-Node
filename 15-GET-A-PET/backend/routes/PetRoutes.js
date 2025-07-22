const router = require("express").Router()

const PetController = require("../controllers/PetController")

// middlewares
const verifytoken = require("../helpers/verify-token")

router.post("/create", verifytoken, PetController.create)

module.exports = router
