import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShieldAlt, faNewspaper, faUserShield, faLightbulb, faLock } from '@fortawesome/free-solid-svg-icons';
import './style/Impact.css';

const Team = () => {
    const scrollContainerRef = useRef(null);
    const scrollAmountRef = useRef(0);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const blogBox = scrollContainer.querySelector('.blog-box');
        
        if (blogBox) {
            const boxWidth = blogBox.offsetWidth;
            const boxMargin = parseInt(window.getComputedStyle(blogBox).marginRight, 10);
            scrollAmountRef.current = boxWidth + (2 * boxMargin);
        }
    }, []);

    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({
            left: -scrollAmountRef.current,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({
            left: scrollAmountRef.current,
            behavior: 'smooth'
        });
    };

    const updateButtonState = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            document.querySelector('.scroll-button.left').disabled = scrollLeft === 0;
            document.querySelector('.scroll-button.right').disabled = scrollLeft + clientWidth >= scrollWidth;
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', updateButtonState);
            updateButtonState(); 
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', updateButtonState);
            }
        };
    }, []);

    const items = [
        {
            title: "Combatting Misinformation",
            content: "Helps prevent the spread of false information by identifying manipulated media, ensuring that only authentic content is shared.",
            icon: faShieldAlt
        },
        {
            title: "Enhancing Trust in Digital Media",
            content: "By verifying the authenticity of content, the platform contributes to building trust in digital communication and media sharing.",
            icon: faCheckCircle
        },
        {
            title: "Supporting Legal and Investigative Efforts",
            content: "Assists law enforcement, journalists, and researchers in identifying fake media, supporting investigations and legal proceedings.",
            icon: faNewspaper
        },
        {
            title: "Empowering Content Creators",
            content: "Protects original content creators by identifying and reporting fake copies of their work, maintaining the integrity of their creations.",
            icon: faUserShield
        },
        {
            title: "Promoting Media Literacy",
            content: "Educates users on the prevalence and risks of deep fake technology, encouraging critical thinking and awareness of manipulated content.",
            icon: faLightbulb
        },
        {
            title: "Reducing Cybercrime and Fraud",
            content: "Detecting deep fake content helps prevent scams, fraud, and other malicious activities that rely on fake media to deceive people.",
            icon: faLock
        }
    ];

    return (
        <>
            <h1 className='team-h'>Impact Of Our Platform</h1>
            <div className="scroll-container">
                <button className="scroll-button left" onClick={scrollLeft}>&#10094;</button>
                <div className="scroll-wrapper" ref={scrollContainerRef}>
                    <div className="scroll-content">
                        {items.map((item, index) => (
                            <div key={index} className="blog-box">
                                <FontAwesomeIcon icon={item.icon} className="icon" />
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="scroll-button right" onClick={scrollRight}>&#10095;</button>
            </div>
        </>
    );
};

export default Team;
