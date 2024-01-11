import React from "react";
import logo from "../logo.jpeg";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  const textStyle = {
    fontSize: "2em",
    color: "#fff",
    textAlign: "center",
    margin: "200px",
    backgroundColor: "black",
  };

  return (
    <div style={backgroundStyle}>
      <div className="home-content">
        <p style={textStyle}>
          Welcome to NC your ultimate destination for the latest and greatest in
          movies and TV shows! Immerse yourself in a world of entertainment
          where you can discover the hottest releases, catch up on your favorite
          series, and stay up-to-date with the most talked-about films. Explore
          our curated collection, featuring a diverse range of genres, from
          thrilling blockbusters to gripping dramas. Join us on a cinematic
          journey where every click brings you closer to the latest in
          entertainment. Your ticket to the world of entertainment starts here!
        </p>
      </div>
    </div>
  );
}

export default Home;
