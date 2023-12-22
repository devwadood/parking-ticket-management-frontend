import React from 'react'
import { styles } from './navbarStyle';
import { menu } from './navbarMenu';
import Link from 'next/link';

function Navbar() {
    const { nav, menuClass, menuItem, flexCenter } = styles.classes;
    return (
        <nav className={nav}>
            <ul className={menuClass}>
                {menu.map((item, index) => (
                    <li key={item.key} className={menuItem}><Link href={item.url} className={flexCenter}>{item.icon}&nbsp;{item.title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar