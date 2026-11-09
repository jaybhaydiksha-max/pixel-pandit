import React from 'react'
import Scroll from './Scroll'
import './style/Scroll.css'
import './style/About.css'
import Team from './Impact'
import './style/Impact.css'
const About = () => {
  return (
    <>
     <div className="A1">
        <div className="heading">
              Why Pixel Pandits Deepfake Detection ?
        </div>
         <div className="box1">
          <div className="A2">
          <h6>Accurate Detection</h6>
                    <p>
                        Our platform utilizes state-of-the-art algorithms designed for precise deepfake detection. By
                        employing
                        advanced machine learning models, we ensure that even the most sophisticated deepfakes are
                        identified with
                        high accuracy, minimizing false positives and negatives.


                    </p>
          </div>
          <div className="A2">
          <h6>User-Friendly Interface</h6>
                    <p>
                        We prioritize ease of use with an intuitive interface that simplifies the deepfake detection
                        process.
                        Whether you're a tech novice or an experienced user, our platform provides clear instructions
                        and a seamless
                        experience, allowing you to upload and analyze media effortlessly.
                    </p>
          </div>
          <div className="A2">
          <h6>Secure and Private</h6>
                    <p>
                        Security is paramount to us. Your data is encrypted using the latest encryption technologies and
                        is never
                        shared without your explicit consent. We adhere to strict privacy standards to ensure that your
                        personal and
                        uploaded content remains confidential.
                    </p>
          </div>
          <div className="A2">
          <h6>Detailed Reporting</h6>
                    <p>
                        Receive comprehensive reports on your uploaded content, detailing the analysis results and
                        providing
                        insights into the authenticity of the media. Our reports include visual evidence and technical
                        data, helping
                        you understand the findings and make informed decisions.
                    </p>
          </div>
     </div>
     </div>
     <div>
      <Scroll/>
      <Team/>
     </div>
    </>
  )
}

export default About