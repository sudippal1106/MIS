import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <main>
        <div className="intro">
          <h1>MIS Websites</h1>
          <p>I am a web developer and I love to create websites.</p>
          <button>Learn More</button>
        </div>
        <div className="achievements">
          <div className="work">
            <i className="fas fa-atom"></i>
            <p className="work-heading">Projects</p>
            <p className="work-text">
              I have worked on many projects and I am very proud of them. I am a
              very good developer and I am always looking for new projects.
            </p>
          </div>
          <div className="work">
            <i className="fas fa-skiing"></i>
            <p className="work-heading">Skills</p>
            <p className="work-text">
              I have a lot of skills and I am very good at them. I am very good
              at programming and I am always looking for new skills.
            </p>
          </div>
          <div className="work">
            <i className="fas fa-ethernet"></i>
            <p className="work-heading">Network</p>
            <p className="work-text">
              I have a lot of network skills and I am very good at them. I am
              very good at networking and I am always looking for new network
              skills.
            </p>
          </div>
        </div>
        <div className="about-me">
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>
              I am a web developer and I love to create websites. I am a very
              good developer and I am always looking for new projects. I am a
              very good developer and I am always looking for new projects.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="me"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
