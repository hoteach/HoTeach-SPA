import { useState } from 'react';

export const useHelloWorld = () => {
  const [message, setMessage] = useState<string>('Hello, World!');

  const updateMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  const resetMessage = () => {
    setMessage('Hello, World!');
  };

  return {
    message,
    updateMessage,
    resetMessage,
  };
};
