import React from 'react';
import ContactForm from './ContactForm';

const ConnectSection: React.FC = () => {
  return (
    <section className="py-16 bg-black p-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Drop me a line</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ConnectSection;
