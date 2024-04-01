import Image from 'next/image';

interface TwitterInfo {
  screenName: string;
  name: string;
  profileImageURL: string;
  profileBannerURL: string;
  description: string;
}

interface TwitterCardProps {
  twitterInfo?: TwitterInfo;
}

function TwitterCard({ twitterInfo }: TwitterCardProps) {
  let profileImageURL = twitterInfo?.profileImageURL.replace(/_normal/g, "");
  
  return (
    <div className="p-2 border rounded-md w-auto overflow-hidden">
      <div className="relative">
        <Image className="mx-auto" src={twitterInfo?.profileBannerURL} alt="Profile banner" layout="fill" />
        <div className="top-14 absolute left-4 lg:top-24 border-4 border-white rounded-full">
          <Image className="rounded-full h-24 w-24" src={profileImageURL} alt="Profile image" layout="fill" />
        </div>
      </div>
      <div className="mt-28 lg:mt-16 px-4">
        <p className="font-bold text-lg leading-6">{twitterInfo?.name}</p>
        <p className="text-sm text-gray-600">@{twitterInfo?.screenName}</p>
        <p className="mt-4 text-sm whitespace-pre-wrap">{twitterInfo?.description}</p>
      </div>
    </div>
  )
}

interface TwitterProps {
  twitterInfo: TwitterInfo | null;
}

const Twitter = ({ twitterInfo }: TwitterProps) => {
  return (
    <div className="container ml-9 p-2 max-w-xs lg:max-w-md ">
      <h2 className="text-4xl font-semibold">Twitter Feed</h2>

      <div className="mt-8">
        {
          (!twitterInfo)? <p>Could not fetch information from Twitter</p>: <TwitterCard twitterInfo={twitterInfo} />
        }
      </div>
    </div>
  )
}

export default Twitter;