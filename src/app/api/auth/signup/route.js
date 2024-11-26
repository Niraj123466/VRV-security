import { User } from "@/models/User.models";
import { signUpSchema } from "@/schemas/signupSchema";
import { NextResponse } from "next/server";
import bcrypt, { hash } from "bcrypt"
import { dbConnect } from "@/lib/dbConnect";

dbConnect()

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    const response = signUpSchema.safeParse({ username, email, password });
    if (!response.success) {
      return NextResponse.json(
        { message: "Inavalid credentails" },
        { status: 400 }
      );
    }

    // check if user already exists or not
    const existingUser = await User.findOne({
        $or : [{username}, {email}]
    })

    if(existingUser) {
        return NextResponse.json(
            {message : "User already exists"},
            {status : 403}
        )
    }

    // hash the password
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username, email, password : hashPassword
    })

    return NextResponse.json(
        {message : "User created successfully"},
        {status : 200},
        {data : user}
    )

  } catch (error) {
    return NextResponse.json(
        {message : error.message},
        {status : 500}
    )
  }
}
