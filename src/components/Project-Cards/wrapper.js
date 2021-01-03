import React from "react";
import ProjectCard from './card';
import "./style.css";

function Portfolio() {
  return (
    <div className="wrapper">
        <div className="row">
            <ProjectCard
                img="assets/Images/Horiseon.png"
                title="Code Refactor"
                innerText="As a beginner introduction to html refactoring we were tasked with
                an HTML file and 'cleaning up' the code for the need of a client."
                site="https://rivenception.github.io/H1_Code_Refactoring/"
                github="https://github.com/Rivenception/H1_Code_Refactoring"
            />
            <ProjectCard
                img="assets/Images/Password Generator.png"
                title="Random Password Generator"
                innerText="An intermediate javascript assignment for creating a random password generator for Uconn Coding Bootcamp
                Homework 3."
                site="https://rivenception.github.io/H3_Password_Generator/"
                github="https://github.com/Rivenception/H3_Password_Generator"
            />
            <ProjectCard
                img="assets/Images/Solo Pine Homes.png"
                title="Solo Pine Homes"
                innerText="A side project for a friend/client to expand his own real estate
                business."
                site="https://rivenception.github.io/SoloPineHomes/"
                github="https://github.com/Rivenception/SoloPineHomes"
            />
            <ProjectCard
                img="assets/Images/Quiz.png"
                title="Web APIs: Code Quiz"
                innerText="An intermediate javascript, html, and css assignment for creating a quiz for Uconn Coding Bootcamp
                Homework 4."
                site="https://rivenception.github.io/H1_Code_Refactoring/"
                github="https://github.com/Rivenception/H1_Code_Refactoring"
            />
            <ProjectCard
                img="assets/gif/05-third-party-apis-homework-demo.gif"
                title="Third-Party APIs: Work Day Scheduler"
                innerText="An intermediate javascript assignment focused on local storage and dynamic html building by creating a
                scheduler for Uconn Coding Bootcamp Homework 5."
                site="https://rivenception.github.io/H5_Work_Planner/"
                github="https://github.com/Rivenception/H5_Work_Planner"
            />
            <ProjectCard
                img="/assets/Images/Weather_app.png"
                title="Weather App"
                innerText="An intermediate javascript assignment focused on local storage and dynamic html building using APIs to gather and report data.
                This application was not designed with mobile in mind."
                site="https://rivenception.github.io/H6_Weather_App/"
                github="https://github.com/Rivenception/H6_Weather_App"
            />
            <ProjectCard
                img="/assets/gif/Ba3R.gif"
                title="BA3R: Real Estate Investing Tool"
                innerText="For project one of the Uconn cohort my team built a real estate investment tool to find comparable homes in the area and provide information on school districts."
                site="https://rivenception.github.io/P1_BA3R_REI_Tool/"
                github="https://github.com/Rivenception/P1_BA3R_REI_Tool/"
            />
            <ProjectCard
                img="/assets/Images/markdown_example.PNG"
                title="Node.js README Generator"
                innerText="This is a Node.js app to dynamically generate a professional README file for your projects."
                site="https://rivenception.github.io/H7_readme_generator"
                github="https://github.com/Rivenception/H7_readme_generator"
            />
            <ProjectCard
                img="/assets/gif/Team-Generator.gif"
                title="Node.js Team Generator"
                innerText="This is a Node.js app to dynamically generates an html page that identifies team members for a given project following prompts from the terminal."
                site="assets/gif/Team-Generator.gif"
                github="https://github.com/Rivenception/H8_team_generator"
            />
            <ProjectCard
                img="/assets/gif/notetaker-demo.gif"
                title="Node.js Notetaker App"
                innerText="This is a Node.js app that allows the user to work from a web browswer to take, edit, and delete notes for themselves as the go about their day."
                site="https://rivenception.github.io/H9_Notetaker"
                github="https://github.com/Rivenception/H9_Notetaker"
            />
            <ProjectCard
                img="/assets/Images/markdown_example.PNG"
                title="Node.js Employee Manager"
                innerText="This is a Node.js app to dynamically generate an html page that identifies team members for a given project."
                site="https://rivenception.github.io/H10_Employee_Tracker"
                github="https://github.com/Rivenception/H10_Employee_Tracker"
            />
            <ProjectCard
                img="/assets/Images/fpi-time-manager.PNG"
                title="Time Manager"
                innerText="An active project for improvement of efficiency and analytics for an aerospace company."
                site="https://fpi-time-manager.herokuapp.com/"
                github="hhttps://github.com/Rivenception/H10_Employee_Tracker"
            />
            <ProjectCard
                img="/assets/Images/Weather_app.png"
                title="Weather App"
                innerText="An intermediate javascript assignment focused on local storage and dynamic html building using APIs to gather and report data.
                This application was not designed with mobile in mind."
                site="https://rivenception.github.io/H6_Weather_App/"
                github="https://github.com/Rivenception/H6_Weather_App"
            />
        </div>
    </div>
  );
}

export default Portfolio;