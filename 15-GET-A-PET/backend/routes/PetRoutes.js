const router = require("express").Router()

const PetController = require("../controllers/PetController")

// middlewares
const verifytoken = require("../helpers/verify-token")
const { imageUpload } = require("../helpers/image-upload")

router.post(
  "/create",
  verifytoken,
  imageUpload.array("images"),
  PetController.create
)
router.get("/mypets", PetController.getAllUserPets)
router.get("/", PetController.getAll)

module.exports = router
