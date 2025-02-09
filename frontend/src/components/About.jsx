// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Marshall</h2>
      <p>
        I’m a dedicated and innovative software developer with a passion for crafting scalable, high-performance web applications.
        With hands-on experience in modern technologies like React, Node.js, and a suite of other cutting-edge tools,
        I have a proven track record of translating complex requirements into elegant, user-centric solutions.
      </p>
      <p>
        My background isn’t just about writing code—it’s about solving problems creatively. I pride myself on my analytical prowess
        and rapid learning ability, consistently delivering projects that not only meet but exceed expectations.
        Whether I’m designing interactive, responsive front-ends or architecting robust backend systems,
        I bring both precision and creativity to every challenge.
      </p>
      <p>
        I thrive in collaborative environments and believe that clear communication and continuous improvement are key to building great software.
        My portfolio reflects a blend of technical excellence and a genuine commitment to quality, making me the ideal candidate for teams
        seeking someone who can drive projects forward while inspiring innovation.
      </p>
      <p>Let’s build the future together.</p>

      {/* Skills Section */}
      <section className="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>Languages
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </li>
          <li>Frameworks
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Django</li>
              <li>.NET Core</li>
            </ul>
          </li>
          <li>Tools & Technologies
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>RESTful APIs</li>
              <li>SQL & NoSQL Databases</li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default About;
