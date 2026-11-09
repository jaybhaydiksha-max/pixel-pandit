import React from 'react';
import Scroll from './Scroll';
import './style/Scroll.css';
import './style/Contactus.css';  
import { useForm } from "react-hook-form";

const Contactus = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const delay = (d) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, d * 1000);
        });
    };

    const onSubmit = async (data) => {
        await delay(2);
        console.log(data);
    };

    return (
        <main>
            {isSubmitting && <div className="loading">Loading....</div>}
            <div className="container contact-section">
                <div className="doubt">
                    <img src="./assets/query2.png" alt="Query" />
                </div>
                <div className="sec">
                    <div className="contact-form">
                        <h2>Get in Touch</h2>
                        <p>Have questions or need support? Fill out the form below, and our team will get back to you as soon as possible.</p>
                        <form className="c-form" id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    {...register("name", { 
                                        required: { value: true, message: "This field is required" }, 
                                        minLength: { value: 2, message: "Min Length is 2" }
                                    })} 
                                />
                                {errors.name && <div className="error-message">{errors.name.message}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    {...register("email", { 
                                        required: { value: true, message: "This field is required" } 
                                    })} 
                                />
                                {errors.email && <div className="error-message">{errors.email.message}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject:</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    {...register("subject", { 
                                        required: { value: true, message: "This field is required" } 
                                    })} 
                                />
                                {errors.subject && <div className="error-message">{errors.subject.message}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea 
                                    id="message" 
                                    {...register("message", { 
                                        required: { value: true, message: "This field is required" } 
                                    })} 
                                />
                                {errors.message && <div className="error-message">{errors.message.message}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="attachment">Attachment (Optional):</label>
                                <input 
                                    type="file" 
                                    id="attachment" 
                                    {...register("attachment")} 
                                />
                            </div>
                            <button disabled={isSubmitting} type="submit" className="cta-button">Submit</button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>You can also reach us via email at <a href="mailto:support@pixelpandits.com">support@pixelpandits.com</a>. We typically respond within 24 hours.</p>
                        <p>Prefer to talk? Call us at <strong>Your Phone Number</strong>. Our support team is available Monday through Friday, 9 AM - 5 PM (Your Time Zone).</p>
                        <p>Visit us at our office:<br />1234 Deep Tech Avenue,<br />Suite 100, Tech City, ST 12345.</p>
                        <p>Follow us on social media for the latest updates and news:</p>
                        <div className="social-icons">
                            <a href="#"><img src="./assets/linkedin.png" alt="LinkedIn" />LinkedIn</a>
                            <a href="#"><img src="./assets/insta.png" alt="Instagram" />Instagram</a>
                        </div>
                        <p>Check out our <a href="/faqs">FAQs</a> for answers to common questions.</p>
                    </div>
                </div>
            </div>
            <div>
                <Scroll />
            </div>
        </main>
    );
};

export default Contactus;
