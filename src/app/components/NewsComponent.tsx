"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type DebouncedFunction<F extends (...args: any[]) => any> = (
  ...args: Parameters<F>
) => void;

function debounce<F extends (...args: any[]) => any>(
  func: F,
  delay: number
): DebouncedFunction<F> {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<F>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const countries = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];
const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const NewsComponent: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>(categories[2]);
  const [country, setCountry] = useState<string>(countries[23]);
  const [pageSize, setPageSize] = useState<number>(15);
  const [page, setPage] = useState<number>(1);

  const debouncedSearch = debounce((value: string) => fetchNews(value), 500);

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, country, pageSize, page]);

  const fetchNews = async (queryString?: string) => {
    const queryParams = new URLSearchParams({
      q: queryString || query,
      category,
      country,
      pageSize: pageSize.toString(),
      page: page.toString(),
    });

    try {
      const response = await fetch(`/api/news?${queryParams}`);
      const data = await response.json();
      setNews(data.articles);
      setTotalResults(data?.totalResults || 0);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setPage(1); // Reset page when changing page size
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="bg-gray-900 p-4">
      <div className="md:flex md:justify-between md:items-center mb-4">
        <div className="mb-4 md:mb-0 w-full">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search news..."
            className="bg-gray-800 text-white px-1 py-2 rounded-md focus:outline-none w-full max-w-200px"
          />
        </div>
        <div className="flex justify-start items-center md:space-x-4">
          <select
            value={country}
            onChange={handleCountryChange}
            className="bg-gray-800 text-white px-1 py-2 rounded-md focus:outline-none"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country.toUpperCase()}
              </option>
            ))}
          </select>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="bg-gray-800 text-white px-1 py-2 rounded-md focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news?.length ? (
          news.map((article, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                {article.title}
              </h3>
              <p className="text-gray-400 mb-2">{`Published on ${formatDate(
                article.publishedAt
              )} by ${article?.source?.name}`}</p>
              <div className="flex flex-row justify-between align-center">
                {article.urlToImage && (
                  <Image
                    src={article.urlToImage}
                    alt="News"
                    className="rounded-lg"
                    width={300}
                    height={200}
                  />
                )}
                <p className="text-gray-300 p-2">{article.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            News articles will be displayed here
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md mr-2 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          disabled={totalResults <= page * pageSize}
          onClick={handleNextPage}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
            totalResults <= page * pageSize
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsComponent;
