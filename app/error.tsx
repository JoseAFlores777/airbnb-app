'use client';

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface errorStateProps {
  error: Error;
}

const ErrorState: React.FC<errorStateProps> = ({ error }) => {
  
  useEffect(() => {
    console.error(error);
  },[error])

  return (
    <EmptyState
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
  )
};

export default ErrorState;
