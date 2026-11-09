// Faqs.jsx
import React, { useState } from 'react';
import Scroll from './Scroll';
import './style/Scroll.css'
import './style/Faqs.css';

const faqData = [
  {
    question: "What is Pixel Pandits ?",
    answer: "Pixel Pandits is an online platform that helps users detect deep fakes in images and videos. By leveraging advanced algorithms, our service analyzes uploaded content to determine its authenticity."
  },
  {
    question: "How do I sign up for Pixel Pandits ?",
    answer: "To sign up, click on the 'Sign Up' option in the navbar, fill in your details, including email, password, and other required information, then submit the form."
  },
  {
    question: "How do I upload an image or video for detection?",
    answer: "After logging in, navigate to the dashboard and click on the 'Detect' button. You can then select an image or video file from your device, and our system will begin the analysis process."
  },
  {
    question: "What types of files can I upload?",
    answer: "Pixel Pandits currently supports common image formats such as JPEG, PNG, and video formats like MP4. Ensure your file is within the allowed size limit."
  },
  {
    question: "What support options are available?",
    answer: "We offer 24/7 customer support via email, chat, and phone. You can also access our comprehensive help center for self-service options."
  },
  {
    question: "How long does it take to detect a deep fake?",
    answer: "The time required for detection depends on the size and complexity of the file. Generally, the process takes just a few minutes, and you will receive a notification once the analysis is complete."
  },
  {
    question: "What happens if my content is detected as a deep fake?",
    answer: "If your content is identified as a deep fake, Pixel Pandits will provide a detailed report explaining the factors that led to this conclusion. You can then choose to save, share, or delete the report."
  },
  {
    question: "Who can I contact for support?",
    answer: "If you have any questions or need assistance, you can reach out to our support team through the 'Contact Us' page or email us at support@pixel pandits.com."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <main>
      <div className="faq-container">
        <div className="faqs1">
        <div><img id="faqs"src="./assets/faqs1.png" alt="image" width="80px" /></div>
        </div>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              <i className={`fas fa-chevron-down toggle-icon ${activeIndex === index ? 'active' : ''}`}></i>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Scroll/>
      </div>
    </main>
  );
};

export default Faqs;
