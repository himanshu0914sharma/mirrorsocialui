import React from 'react';
import ImageCarousel from './ImageCarousel';

const images = [
    { id: 1, url: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, url: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, url: 'https://images.pexels.com/photos/1058633/pexels-photo-1058633.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, url: 'https://media.istockphoto.com/id/1221398880/photo/press-freedom-file-folder.jpg?s=612x612&w=0&k=20&c=SZSDPZXsEnGHz6IoxLjrgrJDVxzIj_D2E9wRbCCCGsc='},
    { id: 5, url: 'https://media.istockphoto.com/id/1144573502/photo/woman-holding-cardboard-paper-with-press-freedom-text-and-rusty-sharp-bare-wire-on-dark.jpg?s=2048x2048&w=is&k=20&c=XDcyvoK0V4DOXZzxulTtqLFcgTXJhoOMH8BJ6-tZj58='},
    // Add more images as needed
];

const images1 = [
    'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800' ,
    'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800' ,
    'https://media.istockphoto.com/id/1221398880/photo/press-freedom-file-folder.jpg?s=612x612&w=0&k=20&c=SZSDPZXsEnGHz6IoxLjrgrJDVxzIj_D2E9wRbCCCGsc=',
    'https://media.istockphoto.com/id/1144573502/photo/woman-holding-cardboard-paper-with-press-freedom-text-and-rusty-sharp-bare-wire-on-dark.jpg?s=2048x2048&w=is&k=20&c=XDcyvoK0V4DOXZzxulTtqLFcgTXJhoOMH8BJ6-tZj58=',
    // Add more images as needed
];

const CarouselSection: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto">
        <ImageCarousel images={images1} />
      </div>
    </section>
  );
};

export default CarouselSection;
