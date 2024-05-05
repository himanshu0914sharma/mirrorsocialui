// pages/api/news.ts

import { type NextRequest } from 'next/server'

const urlQueryParams = ['q', 'category', 'country', 'pageSize', 'page'];

const generateUrl = (searchParams: any) => (urlString: string, param: string) => {
    const paramValue = searchParams.get(param);
    if(!!paramValue){
        return urlString?.trim().length ? `${urlString}&${param}=${paramValue}` : `${param}=${paramValue}`
    }
    return "";
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const apiKey = process.env.NEWS_API_KEYS;
    
    const apiUrl = `https://newsapi.org/v2/top-headlines?${urlQueryParams.reduce(generateUrl(searchParams), "")}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return Response.json(data, {status: 200});
  } catch (error) {
    return Response.json({ message: 'Error fetching news' }, {status: 500});
  }
}
