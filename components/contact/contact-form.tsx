import styled from '@emotion/styled';
import React, { FormEvent, useState } from 'react';

const Contact = styled.section`
    margin: var(--size-8) auto;
    border-radius: 6px;
    background-color: var(--color-grey-100);
    width: 90%;
    max-width: 50rem;
    padding: var(--size-4);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    font-size: var(--size-6);

    h1 {
        font-size: var(--size-8);
        margin: var(--size-4) 0;
        text-align: left;

        @media (min-width: 768px) {
            font-size: var(--size-16);
            text-align: center;
        }
    }
`;
const Form = styled.form`
    label {
        display: block;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        margin: var(--size-2) 0 var(--size-1) 0;
    }

    input,
    textarea {
        font: inherit;
        padding: var(--size-1);
        border-radius: 4px;
        width: 100%;
        border: 1px solid var(--color-grey-400);
        background-color: var(--color-grey-50);
        resize: none;
    }

    button {
        font: inherit;
        cursor: pointer;
        background-color: var(--color-primary-700);
        border: 1px solid var(--color-primary-700);
        padding: var(--size-2) var(--size-4);
        border-radius: 4px;
        color: var(--color-primary-50);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        :hover {
            background-color: var(--color-primary-500);
            border-color: var(--color-primary-500);
        }
    }
`;

const Controls = styled.div`
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
`;
const Control = styled.div`
    flex: 1;
    min-width: 10rem;
`;
const Actions = styled.div`
    margin-top: var(--size-4);
    text-align: right;
`;

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const sendMessageHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    return (
        <Contact>
            <h1>How can I help you?</h1>
            <Form onSubmit={(event) => sendMessageHandler(event)}>
                <Controls>
                    <Control>
                        <label htmlFor={'email'}>Your Email</label>
                        <input
                            type={'email'}
                            id={'email'}
                            value={enteredEmail}
                            onChange={(event) => setEnteredEmail(event.target.value)}
                            required
                        />
                    </Control>
                    <Control>
                        <label htmlFor={'name'}>Your Name</label>
                        <input
                            type={'text'}
                            id={'name'}
                            value={enteredName}
                            onChange={(event) => setEnteredName(event.target.value)}
                            required
                        />
                    </Control>
                </Controls>
                <Control>
                    <label htmlFor={'message'}>Your Message</label>
                    <textarea
                        id={'message'}
                        rows={5}
                        required
                        value={enteredMessage}
                        onChange={(event) => setEnteredMessage(event.target.value)}
                    />
                </Control>
                <Actions>
                    <button>Send Message</button>
                </Actions>
            </Form>
        </Contact>
    );
};

export default ContactForm;
