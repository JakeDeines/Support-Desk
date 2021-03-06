// @decription Register new user
// @route /api/users
// @access Public
const registerUser = (req, res) => {
 const {name, email, password} = req.body

 //Validation (if not these field options not filled out, send a client error )
 if(!name || !email || !password) {
   res.status(400)
   throw new Error('Please include all fields')
 }

res.send('Register Route')
}

// @decription Login user
// @route /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.send('Login Route') 

}

module.exports = {
    registerUser,
    loginUser,
}
    