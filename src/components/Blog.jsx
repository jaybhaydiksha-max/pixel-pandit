import React from "react";
import "./style/Blog.css"; // Import your CSS file

const Blog = () => {
  const articles = [
    {
      title: "Elon Musk shares manipulated Harris video, in seeming violation of X's policies",
      imgSrc: "./assets/em.webp",
      description: "Elon Musk, the world's richest man, has waded into one of the thorniest issues facing U.S. politics: deepfake videos.",
      link: "https://economictimes.indiatimes.com/tech/technology/elon-musk-shares-manipulated-harris-video-in-seeming-violation-of-xs-policies/articleshow/112084359.cms"
    },
    {
      title: "AI and Deepfakes: Unveiling the dark side of election campaigns in India",
      imgSrc: "./assets/second.webp",
      description: "An AI video shows an ecstatic Narendra Modi sporting a trendy jacket and trousers, grooving on a stage to a Bollywood song as the crowd cheers.",
      link: "https://economictimes.indiatimes.com/news/india/ai-and-deepfakes-unveiling-the-dark-side-of-election-campaigns-in-india/articleshow/110169142.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
    },
    {
      title: "AI-generated deepfake videos, voice cloning emerge as potential threats during election season",
      imgSrc: "./assets/third.jpg",
      description: "As political parties go all out to woo voters ahead of the general elections, cybersecurity experts have raised concerns over the possible misuse of artificial intelligence and deepfake technology.",
      link: "https://www.thehindu.com/sci-tech/technology/ai-generated-deepfake-videos-voice-cloning-emerge-as-potential-threats-during-election-season/article68018672.ece"
    },
    {
      title: "AI and deepfakes blur reality in India elections",
      imgSrc: "./assets/fourth.webp",
      description: "In November last year, Muralikrishnan Chinnadurai was watching a livestream of a Tamil-language event in the UK when he noticed something odd.",
      link: "https://www.bbc.com/news/world-asia-india-68918330"
    }
  ];

  return (
    <div className="blog-container">
      {articles.map((article, index) => (
        <div className="blog-post" key={index}>
          <h3>{article.title}</h3>
          <img src={article.imgSrc} alt="Blog visual" className="blog-image" />
          <p>{article.description}</p>
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
