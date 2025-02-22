import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

function Playlist({ link }) {
  const [videoData, setVideoData] = useState(null);

  // Function to extract video ID from various YouTube URL formats
  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|v\/|shorts\/|vi\/))([^?&]+)/
    );
    return match ? match[1] : null;
  };

  useEffect(() => {
    const fetchVideoDetails = async () => {
      if (!link || !apiKey) return; // Prevent unnecessary requests

      const videoId = extractVideoId(link);
      if (!videoId) return;

      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

      try {
        const response = await axios.get(apiUrl);
        const video = response.data.items?.[0]?.snippet;

        if (video) {
          setVideoData({
            title: video.title,
            thumbnail: video.thumbnails?.medium?.url || "",
            videoId,
          });
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoDetails();
  }, [link]);

  if (!videoData) return <p>Loading...</p>;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="md:w-[30%] md:m-0 m-2 bg-gray-600 rounded-xl hover:scale-105 duration-200 cursor-pointer"
    >
      <div className="bg-white text-black h-36 rounded-2xl overflow-hidden">
        <img
          src={videoData.thumbnail}
          alt={videoData.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 text-left">
        <h1 className="text-lg font-semibold">{videoData.title}</h1>
      </div>
    </a>
  );
}

export default Playlist;
