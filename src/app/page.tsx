// import Image from "next/image";
import dynamic from 'next/dynamic';
import BackgroundVideoSection from './components/BackgroundVideoSection';
import AboutSection from './components/AboutSection';
import CarouselSection from './components/CarouselSection';
import OwnerJournalistSection from './components/OwnerJournalistSection';
import SocialHandlesSection from './components/SocialHandlesSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import { NextPageContext } from 'next';
import { fetchUser } from './services/twitter';

const FeedsSection = dynamic(() => import('./components/FeedsSection'));

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

function Home({ twitterInfo }: TwitterProps) {
  return (
    <div>
      <BackgroundVideoSection />
      <AboutSection />
      <FeedsSection twitterInfo={twitterInfo}/>
      <CarouselSection />
      <OwnerJournalistSection />
      <SocialHandlesSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}

Home.getInitialProps = async (context: NextPageContext) => {
  console.log('get init called!!');
  let twitterHandle = process.env.NEXT_PUBLIC_TEST_TWITTER_HANDLE;
  let twitterInfo = null;

  const userResponse = await fetchUser(twitterHandle);
  twitterInfo = {
    'screenName': userResponse.screen_name,
    'name': userResponse.name,
    'profileImageURL': userResponse.profile_image_url_https,
    'profileBannerURL': userResponse.profile_banner_url,
    'description': userResponse.description
  }

  return {
    twitterInfo: twitterInfo,
  }
}

export default Home;