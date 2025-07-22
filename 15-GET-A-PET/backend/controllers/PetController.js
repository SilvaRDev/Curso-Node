const Pet = require("../models/Pet")

// Helpers
const getToken = require("../helpers/get-token")
const getUserByToken = require("../helpers/get-user-by-token")
const ObjectId = require("mongoose").Types.ObjectId

module.exports = class PetController {
  // Create a pet
  static async create(req, res) {
    const { name, age, weight, color } = req.body

    const avaliable = true

    const images = req.files

    // Images upload

    // Validations

    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório." })
      return
    }

    if (!age) {
      res.status(422).json({ message: "A idade é obrigatória." })
      return
    }

    if (!weight) {
      res.status(422).json({ message: "O peso é obrigatório." })
      return
    }

    if (!color) {
      res.status(422).json({ message: "A cor é obrigatória." })
      return
    }

    if (images.length === 0) {
      res.status(422).json({ message: "A imagem é obrigatória." })
      return
    }

    // Get a user's pet
    const token = getToken(req)
    const user = await getUserByToken(token)

    // Create a pet
    const pet = new Pet({
      name,
      age,
      weight,
      color,
      avaliable,
      images: [],
      user: {
        _id: user._id,
        name: user.name,
        image: user.image,
        phone: user.phone,
      },
    })

    images.map((image) => {
      pet.images.push(image.filename)
    })

    try {
      const newPet = await pet.save()
      res.status(201).json({
        message: `O pet '${pet.name}' foi criado com sucesso!`,
        newPet,
      })
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async getAll(req, res) {
    const pets = await Pet.find().sort("-createdAt")

    res.status(200).json({
      pets: pets,
    })
  }

  static async getAllUserPets(req, res) {
    // Get user from token
    const token = getToken(req)
    const user = await getUserByToken(token)

    const pets = await Pet.find({ "user._id": user._id }).sort("-createdAt")

    res.status(200).json({
      pets,
    })
  }

  static async getAllUserAdoptions(req, res) {
    // Get user from token
    const token = getToken(req)
    const user = await getUserByToken(token)

    const pets = await Pet.find({ "adopter._id": user._id }).sort("-createdAt")

    res.status(200).json({
      pets,
    })
  }

  static async getPetById(req, res) {
    const id = req.params.id

    // Check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID Inválido." })
      return
    }

    // Check if pet exists
    const pet = await Pet.findOne({ _id: id })

    if (!pet) {
      res.status(404).json({ message: "O pet não foi encontrado" })
    }

    res.status(200).json({
      pet: pet,
    })
  }

  static async removePetById(req, res) {
    const id = req.params.id

    // Check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID Inválido." })
      return
    }

    // Check if pet exists
    const pet = await Pet.findOne({ _id: id })

    if (!pet) {
      res.status(404).json({ message: "O pet não foi encontrado" })
      return
    }

    // Check if logged in use registred the pet
    const token = getToken(req)
    const user = await getUserByToken(token)

    if (pet.user._id.toString() !== user._id.toString()) {
      res.status(422).json({
        message:
          "Houve um problema ao processar sua solicitação. Tente novamente mais tarde...",
      })
      return
    }

    await Pet.findByIdAndDelete(id)

    res.status(200).json({ message: "Pet removido com sucesso!" })
  }

  static async updatePet(req, res) {
    const id = req.params.id

    const { name, age, weight, color, avaliable } = req.body

    const images = req.files

    const updatedData = {}

    // Check if pet exists
    const pet = await Pet.findOne({ _id: id })

    if (!pet) {
      res.status(404).json({ message: "O pet não foi encontrado" })
      return
    }

    // Check if logged in use registred the pet
    const token = getToken(req)
    const user = await getUserByToken(token)

    if (pet.user._id.toString() !== user._id.toString()) {
      res.status(422).json({
        message:
          "Houve um problema ao processar sua solicitação. Tente novamente mais tarde...",
      })
      return
    }

    // Validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório." })
      return
    } else {
      updatedData.name = name
    }

    if (!age) {
      res.status(422).json({ message: "A idade é obrigatória." })
      return
    } else {
      updatedData.age = age
    }

    if (!weight) {
      res.status(422).json({ message: "O peso é obrigatório." })
      return
    } else {
      updatedData.weight = weight
    }

    if (!color) {
      res.status(422).json({ message: "A cor é obrigatória." })
      return
    } else {
      updatedData.color = color
    }

    if (images.length === 0) {
      res.status(422).json({ message: "A imagem é obrigatória." })
      return
    } else {
      updatedData.images = []
      images.map((image) => {
        updatedData.images.push(image.filename)
      })
    }

    await Pet.findByIdAndUpdate(id, updatedData)

    res.status(200).json({ message: "Pet atualizado com sucesso!" })
  }
}
