import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@/models/User.models"
import bcrypt from 'bcrypt'

export const authOptions = {
    providers : [
        GithubProvider({
            profile(profile) {
                console.log("Github profile : ",profile)
                let userRole = "Github User"

                if(profile?.email == "moreniraj49@gmail.com") {
                    userRole = "admin"
                }

                return {
                    ...profile,
                    role : userRole // add the role to the github profile to access it later    
                }
            },
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),

        GoogleProvider({
            profile(profile) {
                console.log("Google profile : ", profile)
                let userRole = "Google User"

                return {
                    ... profile,
                    id : profile.sub,
                    role : userRole // add the id and role in google profile
                }
            },
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET
        }),

        CredentialsProvider({
            name : "Credentials",
            id : "credentials",
            credentials : {
                username : {
                    label : "Username",
                    placeholder :"Username",
                    type : "text"
                },
                passsword : {
                    lable : "Password",
                    placeholder : "Password",
                    type : "password"
                }
            },

            async authorize(credentials) {
                try {
                    const user = await User.findOne({
                        $or : [{username : credentials.username}, {email : credentials.email}]
                    })

                    if(!user) {
                        throw new Error("User not found")
                    }

                    // check the password
                    const isPasswordValid = await bcrypt.compare(passsword, user.passsword)

                    if(!isPasswordValid) {
                        throw new Error("Invaild password")
                    }

                    return user
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ],

    callbacks : {
        async jwt({token, user}) {
            if(user) {
                token.role = user.role
            }
            return token
        },

        async session({session, token}) {
            if(session?.user) {
                session.user.role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: "/signin", // Custom sign-in page
        error: "/signin", // Redirect error to sign-in page
        signUp: "/signup", // Custom sign-up page (if applicable)
      },
}