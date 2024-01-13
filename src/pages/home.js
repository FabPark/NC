import React from "react";
import logo from "../logo.jpeg";

function Home() {
  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  const imageStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const overlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const textStyle = {
    fontSize: "2em",
    color: "#fff",
    textAlign: "center",
    margin: "400px",
    position: "relative", 
    zIndex: 1, 
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}></div>
      <div style={overlayStyle}></div>
      <div className="home-content">
        <p style={textStyle}>
         Latest Movies and more!
        </p>
      </div>
    </div>
  );
}

export default Home;

