import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialHandlesSection: React.FC = () => {
  return (
    <section className="py-16 bg-green-300">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Connect Online</h2>
        <div className="flex justify-around items-center space-x-6 space-y-6 flex-wrap p-2">
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100073450629315&mibextid=ZbWKwL" className="text-gray-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} />
            <span className="ml-2">Facebook</span>
          </a>
          {/* Twitter (x) */}
          <a href="https://twitter.com/journoanjalii" className="text-gray-700 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={32} />
            <span className="ml-2">X (formerly Twitter)</span>
          </a>
          {/* YouTube */}
          <a href="#" className="text-gray-700 hover:text-red-500" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={32} />
            <span className="ml-2">YouTube</span>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/sharmaanjaliocta" className="text-gray-700 hover:text-pink-500" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} />
            <span className="ml-2">Instagram</span>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/anjali-sharma-1206b2213" className="text-gray-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
            <span className="ml-2">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialHandlesSection;