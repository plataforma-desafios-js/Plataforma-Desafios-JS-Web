import React from "react";
const video = require("../../Static/Videos/coding.mp4");
class Landing extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="landing-container">
          <div className="overlay">
            <h1 style={{color:'white'}}>Desafios JS</h1>
          </div>
          <video src={video} className="video-overlay" autoPlay />
      </div>
    );
  }
}

export default Landing;
