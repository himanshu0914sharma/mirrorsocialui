import React from 'react';

const ConnectSection: React.FC = () => {
  return (
    <section className="py-16 bg-black p-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Connecting</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg shadow-inner" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message:</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 rounded-lg shadow-inner"></textarea>
          </div>
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-lg shadow">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ConnectSection;
