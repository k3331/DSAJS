import React, { Component } from 'react';

// ErrorBoundary component to catch and handle errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger re-render with fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    // Render fallback UI if an error occurred
    return this.state.hasError ? <div>Something went wrong!</div> : this.props.children;
  }
}

// Example component using ErrorBoundary
const MyComponent = () => {
  // ... (component code goes here)
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

// Main App component
const App = () => (
  <div>
    <h1>Your App</h1>
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
    {/* Other components go here */}
  </div>
);

export default App;
