import React, { useEffect, useState } from 'react';
import Twitter from './TwitterFeeds';
// import dynamic from 'next/dynamic';

// const Twitter = dynamic(() => import('./TwitterFeeds'));


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
//   const [feeds, setFeeds] = useState([]);

//   useEffect(() => {
//     // Fetch feeds from @VistaarNews
//     // Replace this with actual API call
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/vistaar-news-feeds');
//         const data = await response.json();
//         setFeeds(data.feeds);
//       } catch (error) {
//         console.error('Error fetching feeds:', error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <section className="py-16 bg-black text-white">
      {/* <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Feeds from Vistaar News</h2>
        <div className="flex overflow-x-auto space-x-4">
          {feeds.map((feed, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg" style={{ minWidth: '300px' }}>
              <h3 className="text-xl font-semibold mb-2">{feed.title}</h3>
              <p>{feed.description}</p>
            </div>
          ))}
        </div>
      </div> */}
      <Twitter twitterInfo={twitterInfo}/>
    </section>
  );
};

export default FeedsSection;