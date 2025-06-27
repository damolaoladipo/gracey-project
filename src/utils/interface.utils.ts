import { Document } from "mongoose";

export interface INote extends Document {
  title: string;
  content: string;
  attachment?: string;
  backgroundColor?: string;
  textColor?: string;
  favourite?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

import { Types, model } from 'mongoose';
export interface IUser {
    email: string;
    password: string;
    username: string;
    _id?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
}
