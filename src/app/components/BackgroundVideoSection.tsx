import React from 'react';

const BackgroundVideoSection: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="https://videos.pexels.com/video-files/6980359/6980359-hd_1920_1080_25fps.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-9xl font-bold">Mirror Social</h1>
        {/* Add other content as needed */}
      </div>
    </section>
  );
};

export default BackgroundVideoSection;
