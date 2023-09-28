import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/Dashboard-Project-Monitoring.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import IMG7 from "../../assets/tryndx-vercel.png";
import IMG8 from "../../assets/ReadyMade.png";
import IMG9 from "../../assets/Cartoonify.png";
import IMG10 from "../../assets/chatgpt-chatbot.png";
import IMG11 from "../../assets/Scraping-saas-flexi.png";
import IMG12 from "../../assets/NPR.png";
import IMG13 from "../../assets/Lunchology.png";
import IMG14 from "../../assets/Affinaquest.png";
import IMG15 from "../../assets/BeehiveIndustries.png";
import IMG16 from "../../assets/Healthetreat.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/snow-dev-work/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "AI Trading journal Website",
      img: IMG7,
      description:
        "Tryndx is a high-powered trading journal that's made to analyze your performance and crunch the numbers.",
      technologies: " React | Node | Vercel | HubSpot | GSAP | Tailwind",
      site: "https://tryndx.vercel.app/",
    },
    {
      id: 3,
      title: "Project Monitoring Dashboard",
      img: IMG2,
      description: "This is a dashboard allowing you to visualize the progress of IT projects.",
      technologies: "Vuex | Javascript | PHP",
      github: "https://github.com/snow-dev-work/Dashboard-project",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://alpha-agency-project.vercel.app/",
      github: "https://github.com/snow-dev-work/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "ReadyMade - Freelancing websites",
      img: IMG8,
      description:
        "This is the freelance websites to find work and grow your career.",
      technologies: "React | Redux | Typescript | Tailwind",
      // link: "https://jokes-project.vercel.app/",
      github: "https://github.com/snow-dev-work/freelancing-react-tailwind",
    },
    {
      id: 6,
      title: "ChatBot using OpenAI",
      img: IMG10,
      description:
        "This is Chatbot using GPT. Enjoy free talking with chatbot",
      technologies: "Typescript | ChatGPT",
      site: "https://www.takeoffchat.com/",
      github: "https://github.com/snow-dev-work/Chatgpt-chatbot",
    },    
    {
      id: 7,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/snow-dev-work/Fs-Poster-Project",
    },
    {
      id: 8,
      title: "Cartoonify",
      img: IMG9,
      description:
        "Pytorch Implementation Translating Real Images to cartoon images using PIX2PIX - Image-to-Image Translation with Conditional Adversarial Networks",
      technologies: "Python | Pytorch | PIX2PIX",
      github: "https://github.com/snow-dev-work/Cartoon-image-convert",
    },
    {
      id: 9,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/snow-dev-work/Joke-App",
    },
    {
      id: 10,
      title: "Scraping for Flexi - saas",
      img: IMG11,
      description:
        "Scrap data from affilisting.com for competitive site.",
      technologies: "Python | Scrapy | selenium | Pymongo",
      github: "https://github.com/snow-dev-work/Joke-App",
    },
    {
      id: 11,
      title: "Number Plate Detection Recognition",
      img: IMG12,
      description:
        "Achieved 90%+ accuracy for vehicle and license plate detection, Achieved 85%+ accuracy for license number detection",
      technologies: "Python | OpenCV | Tensorflow | OCR",
      github: "https://github.com/snow-dev-work/NPR-number-plate-recognition",
    },
    {
      id: 12,
      title: "Luchology",
      img: IMG13,
      description:
        "WordPress website design for a meal delivery service in Miami. Custom Post Types, Advanced Custom Fields, Elementor Pro, and a Custom theme were used.",
        technologies: "WordPress",  
      site: "https://lunchology.co",
    },
    {
      id: 13,
      title: "Affinaquest",
      img: IMG14,
      description:
        "WordPress website design for a meal delivery service in Miami. Custom Post Types, Advanced Custom Fields, Elementor Pro, and a Custom theme were used.",
        technologies: "WordPress | Responsive",  
      site: "https://affinaquest.com",
    },
    {
      id: 14,
      title: "Beehive Industries",
      img: IMG15,
      description:
        "WordPress website design for a meal delivery service in Miami. Custom Post Types, Advanced Custom Fields, Elementor Pro, and a Custom theme were used.",
        technologies: "WordPress | Elementor",  
      site: "https://www.beehiveindustries.com/",
    },
    {
      id: 15,
      title: "Fresh Start",
      img: IMG16,
      description:
        "Fresh Start is Canada’s premier health restoration and lifestyle transformation retreat for those who are sick and tired of feeling sick and tired and are ready to start gradually and naturally improving their health.",
        technologies: "WordPress",  
      site: "https://www.healthretreat.ca/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.github && <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>}
              {pro.link && <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>}
              {pro.site && <a
                href={pro.site}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Site
              </a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
