const router = require('express').Router();
const Users = require("../Model/users-model")

router.get("/", async (req, res) => {
    const allUsers = await Users.find({});
    res.json(allUsers)
});

router.get("/:id", async (req, res) => {
    try {
        const userById = await Users.findById(req.params.id);
        res.status(200).json(userById);
    } catch (err) {
        res.status(404).json(err.message)
    }
})

router.post("/", async (req, res) => {
    const body = req.body;
    
    try {
        const newUser = new Users({
            name: body.name, 
            username: body.username,
            email: body.email,
            address: body.address
        })
        await newUser.save()
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.delete("/:id", async (req, res) => {
    const userId = await Users.findByIdAndRemove(req.params.id);
    res.status(200).json(userId);
})

module.exports = router;