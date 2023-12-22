import React from 'react'
import { styles } from './layoutStyle';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';

function Layout({ children }) {
    const { container } = styles.classes;
    return (
        <div className={container}>
            <Header />
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout