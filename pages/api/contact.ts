import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export type Data = {
    message?: string;
    comments?: any;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const { email, name, message, _id } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
            _id,
        };

        let client;

        try {
            client = await MongoClient.connect(
                `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_KEY}@cluster0.l1xz3m6.mongodb.net/my-blog?retryWrites=true&w=majority`,
            );
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' });
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed!' });
            return;
        }

        client.close();

        res.status(201).json({
            message: 'Successfully stored message!',
            comments: newMessage.message,
        });
    }
}

export default handler;
