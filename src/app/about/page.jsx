import Image from "next/image";
import "./about.css";

const About = () => {
  return (
    <div className="row mx-0">
      <div className="col-6"></div>
      <div className="col-lg-6 d-flex justify-content-center align-items-center">
        <div className="imgContainer">
          <Image src="/about.png" alt="About Image" fill />
        </div>
      </div>
    </div>
  );
};

export default About;
