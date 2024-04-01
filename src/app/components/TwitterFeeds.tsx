

interface TwitterInfo {
  screenName: string;
  name: string;
  profileImageURL: string;
  profileBannerURL: string;
  description: string;
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
          (!twitterInfo)? <p>Could not fetch information from Twitter</p>: <p>Feeds will appear in sometime...</p>
        }
      </div>
    </div>
  )
}

export default Twitter;