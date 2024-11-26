import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        match: [
            /^[a-zA-Z0-9_]{3,16}$/,
            'Username can only contain letters, numbers, and underscores, and must be 3-16 characters long',
          ],
    },

    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Please enter a valid email address',
          ], 
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
      },
}, {timestamps : true})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export {User}
