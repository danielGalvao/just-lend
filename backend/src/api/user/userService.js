const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRgx = /\S+@\S+\.\S+/
const passwdRgx = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsDB = (res, dbErrors) => {
  const errors = []
  _.forIn(dbErrors.errors, error => errors.push(error.message))
  return res.status(400).json({errors})
}

userService.methods(['get', 'post', 'put', 'delete'])
userService.updateOptions({new: true, runValidators: true})

module.exports = userService
