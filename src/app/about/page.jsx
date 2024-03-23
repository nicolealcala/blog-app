import Image from "next/image";
import "./about.css";

const About = () => {
  return (
    <div className="row mx-0">
      <div className="col-lg-6 d-flex flex-column justify-content-evenly">
        <div className="row mx-0">
          <div className="col-12">
            <h4 className="txt-color-mid txt-weight-mid">About Agency</h4>
          </div>
          <div className="col-12">
            <h1 className="my-3">
              <strong>
                We create digital ideas that are bigger, braver, bolder, and
                better.
              </strong>
            </h1>
          </div>
          <div className="col-12">
            <p className="mt-3">
              We believe in good ideas flexibility and precission We’re world’s
              Our Special Team best consulting & finance solution provider. Wide
              range of web and software development services.
            </p>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-4">
            <h1 className="txt-color-mid txt-weight-mid">20+</h1>
            <p>Years of experience</p>
          </div>
          <div className="col-4">
            <h1 className="txt-color-mid txt-weight-mid">1000+</h1>
            <p>Compeleted projects</p>
          </div>
          <div className="col-4">
            <h1 className="txt-color-mid txt-weight-mid">2000+</h1>
            <p>Happy customers</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-center align-items-center">
        <div className="imgContainer">
          <a href="https://storyset.com/work" target="_blank">
            <Image
              src="/about1.png"
              alt="About Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
