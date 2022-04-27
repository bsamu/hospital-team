import React from "react";
<<<<<<< HEAD
import { logger } from "../util/logger.js";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
    logger.error(new Error("Render error"), error.toString());
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
=======
import { logger } from "../util/logger";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logger.error(new Error("render error"), error.toString());
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <>
                <h1>Something went wrong.</h1>;
                <button onClick={() => document.location.reload()}>reload</button>
            </>
        }

        return this.props.children;
    }
}

export default ErrorBoundary
>>>>>>> fdf350530c1b7326d43eee5eed70e655daca0694
