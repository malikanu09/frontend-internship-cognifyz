import React from "react";

const About = () => {
  return (
   <div 
      style={{
        backgroundColor: "lightblue",   // ← camelCase
        padding: "20px",
        minHeight: "calc(100vh - 56px)"
      }}
    >
      <h2 className="mb-3 p-4 fs-30px fw-bold ">About Cognifyz Internship:-</h2>
      <p className= "fw-normal p-3 fs-20px" >
        Cognifyz Technologies provides internship opportunities to help students
        gain practical experience in web development. This internship focuses
        on improving skills in HTML, CSS, JavaScript, and React by working on
        real-world tasks and projects.
      </p>
      <p className="fw-normal p-3">
        Through this internship, I learned how to build responsive user
        interfaces, use React components, and implement routing using
        react-router-dom. It helped me understand real project structure and
        improved my confidence in frontend development.
      </p>
    </div>
  );
};

export default About;
