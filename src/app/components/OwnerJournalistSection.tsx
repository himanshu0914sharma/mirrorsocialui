import React from 'react';
import Image from 'next/image';

const OwnerJournalistSection: React.FC = () => {
  return (
    <section className="py-16 bg-lime-100 p-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image src="https://pbs.twimg.com/profile_images/1774094082933231616/DfEtrheI_400x400.jpg" alt="Journalist"  width={400} height={300}/>
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold mb-4 text-black">The Author</h2>
          <p className="text-lg text-gray-800 mb-4">
            {`Anjali, a skilled journalist by profession, brings a wealth of experience and expertise
            to the journalism industry. She embarked on her academic journey at Kendriya Vidyalaya,
            where she developed a strong foundation for her future endeavors.`}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {`She pursued her Bachelor's in Journalism and Mass Communication (BJMC) from Jhansi
            University, where she honed her skills and knowledge in the field of journalism. Her
            passion for journalism led her to further her education with a Master's in Journalism
            and Mass Communication (MJMC) from Makhanlal Chaturvedi University in Bhopal where she received Medal of excellence from the Vice President of India.`}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {`Anjali's professional journey began at ABP News, where she gained valuable experience
            and insights into the industry. Currently, she serves as an anchor at Vistaar News,
            where she continues to make significant contributions to the field of journalism.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OwnerJournalistSection;
