"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Loader from './Loader';

interface EmbedWebsiteProps {
    width: string;
    height: string;
  }

const EmbedWebsite: React.FC<EmbedWebsiteProps> = ({width, height}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
          (window as any).twttr = (function(d: Document, s: 'script', id: string): HTMLScriptElement {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = (window as any).twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs?.parentNode?.insertBefore(js, fjs);
    
            t._e = [];
            t.ready = function(f: any) {
              t._e.push(f);
            };
            return t;
          }(document, "script", "twitter-wjs"));
        }
        setTimeout(() => setLoading(false), 5000);
      }, []);

  return (
    <>
      <Head>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <div style={{ width, height }}>
        <a className="twitter-timeline"
          data-height="750"
          data-theme="dark"
          href="https://twitter.com/journoanjalii?ref_src=twsrc%5Etfw"
        >
          Tweets by Anjali (@journoanjalii)
        </a>
        {loading && <Loader message='Loading tweets by Anjali...' containerClass='flex flex-col justify-start items-center h-screen mt-40'/>}
      </div>
    </>
  );
};

export default EmbedWebsite;
