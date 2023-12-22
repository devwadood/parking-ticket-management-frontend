import React from 'react'
import { styles } from './footerStyle';

function Footer() {
    const { footer, footerText } = styles.classes;
    return (
        <footer className={footer}>
            <p className={footerText}>All Rights Reserved @ 2024</p>
        </footer>
    )
}

export default Footer