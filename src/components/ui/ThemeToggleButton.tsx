import React, { useState, useEffect } from 'react';
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function App() {
  // Define the state with a type that allows both boolean and null
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  // Effect to determine the theme after the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const initialTheme = storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(initialTheme);
    }
  }, []);

  // Effect to apply the theme to the document and store it in localStorage
  useEffect(() => {
    if (isDarkMode !== null) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  // Function to change the theme
  const handleToggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  if (isDarkMode === null) {
    // Render a loading or empty state while determining the initial theme
    return <div>Loading...</div>;
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <button
        onClick={handleToggleTheme}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 20px',
          background: isDarkMode ? '#333' : '#fff',
          border: '2px solid',
          borderColor: isDarkMode ? '#444' : '#ddd',
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
