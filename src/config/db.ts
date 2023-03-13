import mongoose from 'npm:mongoose@7';

try {
    const url = 'mongodb://172.17.0.3/user-social';
    const db = await mongoose.connect(url);
    console.log("🌿Mongo Conectado: " + db.connection.name);
} catch (error) {
    console.error(error);
}