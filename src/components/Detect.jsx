import React, { useState } from "react";
import Scroll from "./Scroll";
import "./style/Scroll.css";
import "./style/Detect.css";

const UploadForm = () => {
  const [imageFileName, setImageFileName] = useState("");
  const [videoFileName, setVideoFileName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFileName(file ? file.name : "");
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFileName(file ? file.name : "");
  };

  return (
    <main>
      <section className="first">
        <h1 className="head20">
          TrueSight Upload: Check Your
          <br /> Media for Authenticity
        </h1>
        <div className="flex">
          <div className="m1">
            <div id="image20">
              <h2>Image Check</h2>
              <form id="image1">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                />
                <button className="b1" type="submit">
                  Verify
                </button>
              </form>
              <div id="imageFileName">{imageFileName}</div>
              <div id="image-result"></div>
            </div>
            <div id="video20">
              <h2>Video Verify</h2>
              <form id="video1">
                <input
                  type="file"
                  id="videoUpload"
                  accept="video/*"
                  required
                  onChange={handleVideoChange}
                />
                <button className="b1" type="submit">
                  Verify
                </button>
              </form>
              <div id="videoFileName">{videoFileName}</div>
              <div id="video-result"></div>
            </div>
          </div>
          <div className="img">
            <img id="robo" src="/assets/robo.png" alt="Robot" width="400px" />
          </div>
        </div>
        <div className="h4">
          <h1>How To Use This </h1>
        </div>
        <div className="flowchart">
          <div className="step">
            <h2>Prepare Your Media</h2>
            <ul>
              <li>
                Ensure your image or video file is in a supported format (e.g.,
                JPG, PNG, MP4).
              </li>
              <li>Check the file size to ensure it meets the upload limits.</li>
            </ul>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <h2>Upload Your File</h2>
            <ul>
              <li>
                Click the "Choose File" button to select and upload your image
                or video.
              </li>
            </ul>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <h2>Submit for Analysis</h2>
            <ul>
              <li>
                After uploading, click the "Verify" button to begin the deepfake
                detection process.
              </li>
            </ul>
          </div>

          {/* Change the color of arrows between the two rows */}
          <div className="arrow" style={{ color: "White" }}>
            →
          </div>

          <div className="step">
            <h2>Processing</h2>
            <ul>
              <li>
                Our system will analyze the media file for signs of manipulation
                or deepfake content.
              </li>
            </ul>
          </div>

          <div className="arrow" style={{ color: "White" }}>
            →
          </div>

          <div className="step">
            <h2>Receive Results</h2>
            <ul>
              <li>
                Once analysis is complete, you will receive a report indicating
                whether the media is genuine or identified as a deepfake.
              </li>
            </ul>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <h2>Review Report</h2>
            <ul>
              <li>
                Examine the results and detailed report to understand the
                authenticity of your media.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Scroll />
        </div>
      </section>
    </main>
  );
};

export default UploadForm;
