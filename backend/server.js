const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

//Express body-parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcom to the support desk api'})
})

//Routes
app.use('/api/users/', require('./routes/userRoutes'))


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
