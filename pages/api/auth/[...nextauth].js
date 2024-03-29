import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import User from '../../../models/User'
import Doctor from '../../../models/Doctor'
import dbConnect from "../../../utils/mongo";

export default NextAuth({
    
    secret:process.env.SECRET,

    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {

                dbConnect();

                const { email, password } = credentials;

                // Check if email and password is entered
                if (!email || !password) {
                    throw new Error('Please enter email or password');
                }

                // Find user in the database
                const user = await User.findOne({ email }).select('+password') || await Doctor.findOne({ email }).select('+password')

                if (!user) {
                    throw new Error('Invalid Email or Password')
                }

                // Check if password is correct or not
                const isPasswordMatched = await user.comparePassword(password);

                if (!isPasswordMatched) {
                    throw new Error('Invalid Email or Password')
                }

                return Promise.resolve(user)

            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
          user && (token.user = user);
          return token;
        },
        session: async ({ session, token }) => {
          session.user = token.user;  // Setting token in session
          return session;
        },
      }
})