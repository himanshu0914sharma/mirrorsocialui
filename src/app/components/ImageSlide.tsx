import React from 'react';
import Image from 'next/image';

interface ImageSlideProps {
  src: string;
  index: number;
  currentIndex: number;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ src, index, currentIndex }) => {
  const scaleFactor = 1.1 - Math.abs(currentIndex - index) * 0.1; // Gradual scaling factor

  return (
    <div className="mx-2" style={{ transform: `scale(${scaleFactor})` }}>
      <Image src={src} alt={`Image ${index}`} width={300} height={200} className="rounded-lg shadow-lg transition-transform duration-300 cursor-pointer" />
    </div>
  );
};

export default ImageSlide;