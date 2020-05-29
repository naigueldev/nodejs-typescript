import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    fullName(): string
}

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
