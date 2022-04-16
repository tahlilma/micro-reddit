import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { message, Spin } from "antd";
import Head from "next/head";
import axios from "axios";
import PostCard from "../../components/PostCard";

export default function ViewSubreddit() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { subreddit } = router.query;

  useEffect(() => {
    if (!subreddit) return;

    axios
      .get(`https://www.reddit.com/r/${subreddit}.json?limit=100`)
      .then((res) => {
        const posts = res.data.data.children
          .filter((item) => item.data.is_video === false)
          .map((item) => {
            return {
              author: item.data.author,
              title: item.data.title,
              url: item.data.url,
              created: item.data.created,
            };
          });

        console.log(`Data Fetched, Total: ${posts.length}`);
        setData(posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        message.error("Something Went Wrong. Retry");
      });
  }, [subreddit]);

  if (loading) {
    return (
      <div className="center">
        <Head>
          <title>Loading...</title>
        </Head>
        <Spin />
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>{subreddit}</title>
        </Head>
        {data.map((item) => (
          <PostCard
            title={item.title}
            url={item.url}
            author={item.author}
            created={item.created}
          />
        ))}
      </div>
    );
  }
}
