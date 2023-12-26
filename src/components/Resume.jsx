import React, { forwardRef } from "react";

const Resume = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-gray-100 p-10">
      <div className="container mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">
            Dasari Srinivasa Yaswanth Dasari
          </h1>
          <p className="text-md">
            Contact: 9100297633 | Email: dsyaswanth777@gmail.com
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="text-blue-600">
              LinkedIn
            </a>
            <a href="#" className="text-blue-600">
              GitHub
            </a>
            <a href="#" className="text-blue-600">
              Personal Website
            </a>
          </div>
        </header>

        {/* Education Section */}
        <div className="education ">
          <h2 className="text-xl font-extra-bold ">Education</h2>
          <hr />
          <div className="">
            <div className="flex justify-between py-1">
              <p>Bachelor Of Technology in Computer Science (B.Tech)</p>{" "}
              <p className="font-extra-bold">7.53 CGPA </p>
            </div>
            <div className="flex justify-between ">
              <p>
                Parul Institute of Engineering & Technology, Vadodara, Gujarat
              </p>{" "}
              <p className="pt-2">07/2019–04/2023</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills mb-3">
          <h2 className="text-xl font-extra-bold ">Skills</h2>
          <hr />
          <div>
            <h4>
              {" "}
              <span className="font-extra-bold">Programming:</span> JavaScript,
              Python, C,
            </h4>
          </div>
          <h4>
            <span className="font-extra-bold">Web Development:</span>
            HTML, CSS, Bootstrap, Sass, Tailwind CSS, ReactJS, NextJS
          </h4>
          <h4>
            <span className="font-extra-bold">Soft Skills:</span>
            Problem-solving, Teamwork, Agility, Strong Communication
          </h4>
          <h4>
            <span className="font-extra-bold">Other Technical Skills:</span>
            Version control Git, Github, Object-Oriented Programming.
          </h4>
        </div>

        {/* Experience Section */}
        <div className="experience mb-10">
          <h2 className="text-xl font-extra-bold ">Experience</h2>
          <hr className="font-extra-bold" />
          <div className="flex justify-between ">
            <div className="font-semi-bopld">Trainee Web Developer</div>
            <div>11/2022– 05/2023</div>
          </div>
          <div className="font-extra-bold">
            Zignuts Techno Lab Pvt. Ltd Gandhinagar
          </div>
          <ul className="list-disc">
            <li className="ms-8">
              Introduced modular design patterns and reusable components,
              reducing development time by 25% and fostering cross-team
              collaboration with a shared UI library.
            </li>
            <li className="ms-8">
              Developed user interfaces using JavaScript frameworks (e.g.,
              React) and CSS libraries (Sass, Bootstrap), achieving a 40%
              optimization in loading times and enhancing user engagement
              through interactive components and seamless navigation.
            </li>
            <li className="ms-8">
              Successfully delivered projects within designated timelines by
              demonstrating meticulous project management and task
              prioritization, resulting in a 95% completion rate on all
              projects.
            </li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="projects mb-10">
          <h2 className="text-xl font-extra-bold mb-3">Projects</h2>
          {/* Projects details here */}
        </div>

        {/* Certifications Section */}
        <div className="certifications">
          <h2 className="text-xl font-extra-bold mb-3">Certifications</h2>
          {/* Certifications details here */}
        </div>
      </div>
    </section>
  );
});

Resume.displayName = "Resume";

export default Resume;
