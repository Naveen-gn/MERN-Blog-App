import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dmy%2Bprofile%2Bicon&psig=AOvVaw0w3VR_YuBupx4bae6Vdxyi&ust=1707800646644000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC3nK2DpYQDFQAAAAAdAAAAABAE"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;