import React from "react";
const video = require("../../Static/Videos/coding.mp4");
class Landing extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="landing-container">
        <video src={video} className="video-overlay" autoPlay />
      </div>
    );
  }
}

export default Landing;
