const _      = require('lodash')
const jwt    = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User   = require('./user')
const env    = require('../../.env')

const emailRgx  = /\S+@\S+\.\S+/
const passwdRgx = /((?=.*\d)(?=.*[0-9])(?=.*[A-Z]).{6,20})/

const sendErrorsDB = (res, dbErrors) => {
  const errors = []
  _.forIn(dbErrors.errors, error => errors.push(error.message))
  return res.status(400).json({errors})
}

const login = (req, res, next) => {
  const email = req.body.email || ''
  const passwd = req.body.passwd || ''

  User.findOne({ email }, (err, user) => {
    if(err) {
      return sendErrorsDB(res, err)
    } else if(user && bcrypt.compareSync(passwd, user.passwd)) {
      const token = jwt.sign(user, env.authSecret, {
        expireIn: "1 day"
      })
      res.json({ user, token })
    } else {
      return res.status(400).send({errors: ['Usuário/Senha inválidos.']})
    }
  })
}

const validateToken = (req, res, next) => {
  const token = req.body.token || ''

  jwt.verify(token, env.authSecret, (err, decoded) => {
    return res.status(200).send({ valid: !err})
  })
}

const signup = (req, res, next) => {

  const name        = req.body.name || ''
  const email       = req.body.email || ''
  const passwd      = req.body.passwd || ''
  const checkPasswd = req.body.checkPasswd || ''

  if(!email.match(emailRgx)) {
    return res.status(400).send({errors: ['O email informado está inválido.']})
  }

  if(!passwd.match(passwdRgx)) {
    return res.status(400).send({
      errors: ['Senha precisa ter: uma letra maiúscula, um número e ter entre 6 e 20 caracteres.']
    })
  }

  const salt = bcrypt.genSaltSync()
  const passwdHash = bcrypt.hashSync(passwd, salt)

  if(!bcrypt.compareSync(checkPasswd, passwdHash)) {
    return res.status(400).send({ errors: ['Senhans não conferem.']})
  }

  User.findOne({email}, (err, user) => {
    if(err) {
      return sendErrorsDB(res, err)
    } else if(user) {
      return res.status.send({errors: ['Usuário já cadastrado.']})
    } else {
      const newUser = new User({ name, email, passwd: passwdHash})
      newUser.save(err => {
        if(err) {
          return sendErrorsDB(res, err)
        } else {
          login(req, res, next)
        }
      })
    }
  })
}

module.exports = {login, signup, validateToken}
