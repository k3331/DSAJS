// App.js
import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value (in this case, 'light')
const ThemeContext = createContext('light');

const ThemedComponent = () => {
  // Use the useContext hook to access the current value of the ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000', padding: '10px' }}>
      <p>Themed Component</p>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const ThemeProvider = ({ children }) => {
  // Use state to manage the theme
  const [theme, setTheme] = useState('light');

  // Toggle function to switch between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the context value through the ThemeContext.Provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Themed App</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
