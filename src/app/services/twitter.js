import Twitter from 'twitter-lite';

export const fetchUser = async (screen_name) => {
    console.log(screen_name);
  const client = new Twitter({
    version: "1.1",
    bearer_token: process.env.NEXT_PUBLIC_BEARER_TOKEN,
    timeout: 5000
  });

  return client.get('users/show', { screen_name: screen_name });
}