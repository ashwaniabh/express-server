import * as mongoose from 'mongoose';

export default class Database {
    public static async open(MONGO_URL) {
        try {
            await mongoose.connect(MONGO_URL);
            console.log("connected to mongoose");
        } catch (error) {
            throw new Error(`unable to connect Database: ${MONGO_URL}`)
        }
        mongoose.connection.on("error", () => {
            throw new Error(`unable to connect Database: ${MONGO_URL}`)
        });
    }
    public static disconnect() {
        console.log("Disconnected to mongoose");
        mongoose.disconnect();
    }
}