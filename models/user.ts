import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required!']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!']
  },
  password: {
    type: String,
    required: [true, 'Password is required!']
  },
  avatar: {
    type: String,
    default: 'av-1.png'
  }
});

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export const User = model<IUser>('User', userSchema);
