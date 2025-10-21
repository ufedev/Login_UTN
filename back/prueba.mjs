import bcrypt from 'bcrypt'

const password = "12345678"

const salt = await bcrypt.genSalt(10)
const hash = await bcrypt.hash(password, salt)

console.log(hash)
