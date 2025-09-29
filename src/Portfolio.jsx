import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Sumanth, a passionate developer with a love for creating beautiful and functional web applications.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - A description of project 1.</li>
          <li>Project 2 - A description of project 2.</li>
          <li>Project 3 - A description of project 3.</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>Job Title at Company - A brief description of responsibilities.</li>
          <li>Job Title at Company - A brief description of responsibilities.</li>
        </ul>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>Degree in Field - University Name</li>
          <li>Degree in Field - University Name</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: sumanth@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sumanth">linkedin.com/in/sumanth</a></p>
      </section>
    </div>
  );
};

export default Portfolio;