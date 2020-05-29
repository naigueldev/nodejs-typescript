import { Schema, model } from 'mongoose'
import UserInterface from './UserInterface'

const UserSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return this.firstname + ' ' + this.lastname
}

export default model<UserInterface>('User', UserSchema)
