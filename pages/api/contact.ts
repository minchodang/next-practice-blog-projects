function handler(
    req: { method: string; body: { email: any; name: any; message: any } },
    res: {
        status: (arg0: number) => {
            (): any;
            new (): any;
            json: { (arg0: { message: any; response?: any }): void; new (): any };
        };
    },
) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
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
        //Store it in a database;
        const newMessage = {
            email,
            name,
            message,
        };
        console.log(newMessage);
        res.status(201).json({
            message: 'Successfully stored message!',
            response: newMessage.message,
        });
    }
}

export default handler;
