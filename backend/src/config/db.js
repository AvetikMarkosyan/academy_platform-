import mongoose from "mongoose";

export default async function connectDB() {
	try {
		await mongoose.connect(process.env.MOGO_URI);
		console.log('MongoDB connected');
	} catch (err) {
		console.error('MongoDB connection faild', err);
		process.exit(1);
	}
}
