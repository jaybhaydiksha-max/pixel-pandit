import React, { useState } from 'react';
import styles from './style/Login.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div className={`${styles.container12} ${isSignUp ? styles.rightPanelActive : ''}`}>
            <div className={styles.signUp12}>
                <form className={styles.form200}>
                    <h1>Create Account</h1>
                    <div className={styles.socialContainer12}>
                        <a href="#" className={styles.social1}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    </div>
                    <p>or use your email for registration</p>
                    <input type="text" name="txt" placeholder="Name" required />
                    <input type="email" name="email" placeholder="email" required />
                    <input type="password" name="pswd" placeholder="password" required />
                    <button className={styles.button12}>Sign up</button>
                </form>
            </div>
            <div className={styles.signIn12}>
                <form className={styles.form200}>
                    <h1>Sign in</h1>
                    <div className={styles.socialContainer12}>
                        <a href="#" className={styles.social1}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    </div>
                    <p>or use your email for registration</p>
                    <input type="email" name="email" placeholder="email" required />
                    <input type="password" name="pswd" placeholder="password" required />
                    <a href="#">Forget your Password</a>
                    <button className={styles.button12}>Sign In</button>
                </form>
            </div>
            <div className={styles.overlayContainer}>
                <div className={styles.overlay}>
                    <div className={styles.overlayLeft}>
                        <h1>Welcome back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className={styles.button12} id="signIn" onClick={handleSignInClick}><FontAwesomeIcon icon={faSignInAlt} /> Sign in</button>
                    </div>
                    <div className={styles.overlayRight}>
                        <h1>Hello Friends</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className={styles.button12}id="signUp" onClick={handleSignUpClick}><FontAwesomeIcon icon={faUserPlus} /> Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
