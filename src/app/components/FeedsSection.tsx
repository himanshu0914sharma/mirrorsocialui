import React from 'react';
import EmbedWebsite from './EmbedWebsite';


interface TwitterProps {
    twitterInfo: TwitterInfo | null;
  }
  
  interface TwitterInfo {
    screenName: string;
    name: string;
    profileImageURL: string;
    profileBannerURL: string;
    description: string;
  }

const FeedsSection: React.FC<TwitterProps> = ({twitterInfo}: TwitterProps) => {
  return (
    <section className="py-16 bg-black text-white flex justify-center">
      <EmbedWebsite width='80vw' height='70vh'/>
    </section>
  );
};

export default FeedsSection;