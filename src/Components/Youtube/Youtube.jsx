import React from "react";
import "./Youtube.css";

function Youtube() {
  // Array of YouTube videos - replace the video IDs with your actual YouTube video IDs
  const videos = [
    {
      id: "UfGv0WQFNmk",
      title: "Interview with Sheikh",
      description: "An insightful discussion about modern Islamic perspectives and challenges."
    },
    {
      id: "UfGv0WQFNmk",
      title: "Islamic Finance Explained",
      description: "Understanding the principles of Islamic finance in today's economic landscape."
    },
    {
      id: "UfGv0WQFNmk",
      title: "Monthly Reflection",
      description: "Monthly spiritual guidance and reflections on contemporary issues."
    },
    {
      id: "UfGv0WQFNmk",
      title: "Q&A Session",
      description: "Answering common questions from the community about Islamic practices."
    },
    {
      id: "UfGv0WQFNmk",
      title: "Special Event Coverage",
      description: "Highlights from our recent community gathering and religious celebrations."
    },
    {
      id: "UfGv0WQFNmk",
      title: "Educational Series",
      description: "Part of our ongoing educational series about Islamic teachings and principles."
    }
  ];

  return (
    <div className="youtube-container">
      <div className="youtube-hero">
        <h1>Video Gallery</h1>
        <p>Explore our collection of inspiring and educational content</p>
      </div>
      
      <div className="videos-grid" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Youtube;