import React from "react";
import "./app.css";

function App() {
  return (
    <div>
      <h1>Testing screen rotate</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        cum! Explicabo est saepe hic laborum.
      </p>
      <div className="videoWrapper">
        <div className="videoBox">
          <iframe
            src={`https://www.youtube.com/embed/ULdkpU51hTQ?autoplay=1&playsinline=1`}
            title={"Youtube title"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
