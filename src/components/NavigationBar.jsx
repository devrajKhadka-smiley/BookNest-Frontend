import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["navbar-left"]}>
                <img src="/src/assets/logo.png" alt="logo" className={styles["navbar-left_logo"]} />
            </div>
            <div className={styles.navbarMid}>
                <ul className={styles.navbarMidList}>
                    <li className={styles.navbarMidListItem}> <Link to="/">Home</Link></li>
                    <li className={styles.navbarMidListItem}><Link to="/about">About</Link></li>
                    <li className={styles.navbarMidListItem}><Link to="/services">Services</Link></li>
                    <li className={styles.navbarMidListItem}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className={styles.navbarRight}>
                <button className={styles.navbarRightButton}><Link to="/login">Login</Link></button>
                <button className={styles.navbarRightButton}><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
    )
}

export default NavigationBar