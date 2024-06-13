import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorFallback from './ErrorFallback';
// import { ErrorFallback } from '.';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI here
      return (
        <div className="error-boundary flex justify-center">
      <h1>Something went wrong. Please try again later.</h1>
      <ErrorFallback/>
      </div>
    )}
    // Render the child components if no error occurred
    return this.props.children;
  }
}

// Prop validation for children
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired // children must be a node (React element, string, number, etc.) and is required
};

export default ErrorBoundary;
