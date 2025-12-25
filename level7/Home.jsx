import React from "react";
import { useNavigate } from "react-router-dom";
import intImg from '../Assets/int.jpg';


const Home = () => {
  const navigate = useNavigate();

    return  (
     <>
<div className="row">
<div className="col-md-6">

<h1 className="fw-bold mb-5 mt-4 display-4"> Hello cognifyz</h1>
<p className="mb-9 text-brown fs-9 fw-normal">
I got an internship at Cognifyz, so happy!

  Excited to learn and grow in real-world projects. 

  Looking forward to enhancing my skills and contributing effectively.
</p>
<button className="btn btn-danger mt-8 mb-9 me-4" onClick={() => navigate("/contact")}>
 Get Started </button>
<button className="btn btn-primary" onClick={() => navigate("contact")}>
Learn More</button>
</div>




<div className="col-md-6 d-flex justify-content-center">
<img src={intImg} alt="Internship Illustration" className="img-fluid me-5  me-6 max-width" />

</div>
</div>

</>
  

    );
};
export default Home;
