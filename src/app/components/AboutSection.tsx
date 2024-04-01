import React from 'react';

import { FaStar, FaHeart, FaUsers } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Mirror Social</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          {/* Vision Card */}
          <div className="flex md:flex-row-reverse items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="w-1/2 md:pr-12">
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p>Our vision at mirror social is to become the go-to source for breaking news, insightful analysis, and engaging entertainment content.</p>
            </div>
            <div className="w-1/2 md:pl-12 flex justify-center items-center">
              <FaStar className="text-6xl text-yellow-300" />
            </div>
          </div>
          {/* Value Card */}
          <div className="flex md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="w-1/2 md:pl-12">
              <h3 className="text-xl font-semibold mb-4">Value</h3>
              <p>At mirror social, we are committed to upholding the highest standards of journalistic integrity, accuracy, and impartiality.</p>
            </div>
            <div className="w-1/2 md:pr-12 flex justify-center items-center">
              <FaHeart className="text-6xl text-yellow-300" />
            </div>
          </div>
          {/* Audience Card */}
          <div className="flex md:flex-row-reverse items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="w-1/2 md:pr-12">
              <h3 className="text-xl font-semibold mb-4">Audience</h3>
              <p>Our audience is diverse and discerning, and we strive to provide content that appeals to a wide range of interests and perspectives.</p>
            </div>
            <div className="w-1/2 md:pl-12 flex justify-center items-center">
              <FaUsers className="text-6xl text-yellow-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
