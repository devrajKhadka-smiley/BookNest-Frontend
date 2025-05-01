import React from 'react'
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["navbar-left"]}>
                <img src="/src/assets/logo.png" alt="logo" className={styles["navbar-left_logo"]} />
            </div>
            <div className={styles.navbarMid}>
                <ul className={styles.navbarMidList}>
                    <li className={styles.navbarMidListItem}>Home</li>
                    <li className={styles.navbarMidListItem}>About</li>
                    <li className={styles.navbarMidListItem}>Services</li>
                    <li className={styles.navbarMidListItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.navbarRight}>
                <button className={styles.navbarRightButton}>Login</button>
                <button className={styles.navbarRightButton}>Sign Up</button>
            </div>
        </div>
    )
}

export default NavigationBar