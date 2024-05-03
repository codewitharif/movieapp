import React from "react";

const Howtodownload = () => {
  return (
    <div style={{ height: "100vh", marginTop: "20px" }}>
      <h1 className="text-center text-4xl font-medium mb-8 mt-8">
        How To Download?
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <video style={{ width: 640, height: 360 }}>
          <source
            src="https://pub-8bdc1e373b204c188120d7cafde49b44.r2.dev/How-To-Download-HDHub4u.mp4?_=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Howtodownload;
