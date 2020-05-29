import { Document } from 'mongoose'

export default interface UserInterface extends Document {
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    fullName(): string
}
