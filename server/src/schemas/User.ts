/*
 * This file provides the database schemea for a User object
 * It also exports a User model for mongoose to use rich prescense
 */

import { Schema, model, Document } from "mongoose";

// regular expressions that all users should match
export const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/gm;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

export const SALT_ROUNDS = 10;

export interface IToken {
  createdTimestamp: Date;
  name: string;
  symbol: string;
  decimal: number;
  supply: number;
  contactAddress: string;
}

export interface IEmail {
  address: string;
  addressLower: string; // used to index
  verified: boolean;
  verificationCode?: string;
  verificationExpiry?: Date;
}

const EmailSchema = new Schema(
  {
    address: { type: String, required: true },
    addressLower: { type: String, required: true, index: true },
    verified: { type: Boolean, required: true },
    verificationCode: String,
    verificationExpiry: Date,
  },
  { _id: false }
);

export interface IUser extends Document {
  username: string;
  usernameLower: string;
  email: IEmail;
  emailLower: string;
  hash: string; // password hash
  tokens: IToken[];
}

const UserSchema = new Schema({
  username: { type: String, required: true },
  usernameLower: { type: String, required: true, index: true },
  email: EmailSchema,
  hash: { type: String, required: true },
  verified: { type: Boolean, required: true, default: false },
  tokens: { type: Map, of: Object, default: [] },
});

export default model<IUser>("users", UserSchema);
