//create express app
const exp = require('express')
const app = exp();

const cors=require("cors")

//configure environment variables
require('dotenv').config()

//connect to react application
const path = require('path')
//join with react
app.use(exp.static(path.join(__dirname, "../frontend/build")));

//add body parsing middleware
app.use(exp.json())

app.use(cors({origin:"http://localhost:3000"}))

//import api
const userApp = require('./APIs/user-api');
const paymentApp = require('./APIs/payment-api');

//forward req to userApp when path starts with '/user-api'
app.use('/user-api', userApp)
app.use('/payment-api', paymentApp)

//error handler for the unwanted routing
app.use((req, res, next) => {
    res.sendFile((path.join(__dirname, '../frontend/build/index.html')))
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

//error handler
app.use((err, req, res, next) => {
    res.send({ message: 'error from handler occured', payload: err.payload })
})



//asign port number
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`))