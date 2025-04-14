import React from 'react';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`bg-no-repeat bg-center bg-cover cursor-pointer ${className}`}
    />
  );
};

export default Image
