import React from 'react';

interface LoaderProps {
  message?: string;
  containerClass?: string;
}

const Loader: React.FC<LoaderProps> = ({ message, containerClass="flex flex-col justify-center items-center h-screen" }) => {
  return (
    <div className={containerClass}>
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Loader;