const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    res.setHeader("X-Myname", "Hardik Dheer")
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: "user not found" })
    }
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, req.body);


    return res.json({ status: "Success" });
}

async function handleDeleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success", message: "User Deleted" });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({ status: "Success", id: users.length })
    // })
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_Title: body.job_Title
    })
    console.log(result)
    return res.status(201).json({ msg: "success", id: result._id })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUser,
    handleCreateNewUser
}