import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        height: "100vh",
                  // pura viewport height
        display: "flex",
        justifyContent: "center",    // horizontal center
        alignItems: "center",        // vertical center
        flexDirection: "column",
        padding: "0 500px",           // sides se thoda gap
        boxSizing: "border-box",
        backgroundColor: " lightbrown",
        
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Contact Me</h2>

      <form style={{ width: "400px", maxWidth: "100%" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Your Message"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        ></textarea>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;


