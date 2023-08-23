/*
const User = require('./../models/userModel')
const catchAsync = require('./../utils/catchAsync')

// Handler function for getting all users
exports.getUsers = catchAsync(async (req, res, next) => {
    // Access the database to retrieve all users
    const users = await User.find()
    // Send a response with the retrieved users
    res.status(200).json({
        status: 'success',
        data: users
    })
})

// Handler function for getting a single user
exports.getUser = catchAsync(async (req, res, next) => {
    // Log the current user for debugging purposes
    console.log(req.user)
     // Send a response with the retrieved user data
    res.status(201).json({
        status: 'success',
        data: req.user
    })
})
*/