import { useState } from 'react';
import { useHelloWorld } from './hooks/useHelloWorld';
import { useThemeContext } from '../../contexts/ThemeContext';
import { Theme } from '../../types';

export default function HelloWorld() {
  const { message, updateMessage, resetMessage } = useHelloWorld(); //custom hook

  const { theme, setTheme } = useThemeContext();

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="w-full">
      <h1>Hello World</h1>
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Type a new message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="mt-4">
        <button
          onClick={() => updateMessage(inputValue)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Update Message
        </button>
        <button
          onClick={resetMessage}
          className="bg-gray-500 text-white px-4 py-2 rounded">
          Reset Message
        </button>
        <button
          className="bg-pink-600 w-10"
          onClick={() => setTheme(Theme.DARK)}>
          D
        </button>
        <button
          className="bg-pink-600 w-10"
          onClick={() => setTheme(Theme.LIGHT)}>
          L
        </button>
      </div>
      <h2>{message}</h2>
    </div>
  );
}
