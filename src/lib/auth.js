import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils"
import { User } from "./models"
import bcrypt from "bcrypt"
import { authConfig } from "./auth.config"

const credentialsLogIn = async (credentials) => {
    try {
        connectToDb()
        const existingUser = await User.findOne({ email: credentials.email });

        if (!existingUser) throw new Error("User not found. Create an accout to continue.")

        const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password)
        if (!passwordMatch) throw new Error("Incorrect password.")

        return existingUser;
    } catch (err) {
        console.log(err)
        throw new Error("Failed to log in");
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    return await credentialsLogIn(credentials);
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === 'github') {
                connectToDb()
                try {
                    const existingAcount = await User.findOne({ email: user.email })

                    if (!existingAcount) {
                        const newAccount = new User({
                            username: user.name,
                            email: user.email,
                            img: user.image
                        })

                        await newAccount.save();
                    }
                } catch (error) {
                    console.log(error)
                    return false
                }
            }
            return true;
        }
    },
    ...authConfig.callbacks
})