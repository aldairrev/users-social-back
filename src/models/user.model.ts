import { Schema, model } from 'npm:mongoose@7';

const User = new Schema({
    firstname: String,
    lastname: String,
    age: String,
    bio: String,
    subjects: String,
    avatar: String,
    enabled: Boolean,
}, {
    timestamps: true,
});

export default model("User", User);
