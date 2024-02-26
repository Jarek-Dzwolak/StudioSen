import React, { useState, useEffect } from "react";

function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,caption&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.data))
      .catch((error) =>
        console.error("Error fetching data from Instagram:", error)
      );
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.thumbnail_url} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default InstagramFeed;
