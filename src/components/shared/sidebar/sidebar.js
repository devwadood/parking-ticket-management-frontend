import React, { useEffect, useState } from 'react'
import { styles } from './sidebarStyle';
import { menu } from './sidebarMenu';
import { usePathname } from 'next/navigation';
import { CloseOutlined, DashboardOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Sidebar() {
    const pathname = usePathname();
    const [show, setShow] = useState(true);
    useEffect(() => {
        document.body.style.overflow = !show ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);
    const { aside, sidebarNavItem, sidebarNav, sidebarNavItemActive, blackBox, ml1, toggleSidebarButton, sidebarNavTransition } = styles.classes;
    return (

        <aside className={aside}>
            <button className={toggleSidebarButton} onClick={(e) => {
                setShow(!show);
            }}>
                {show ? <MenuOutlined /> : <CloseOutlined />}
            </button>
            <ul className={show ? sidebarNav : sidebarNavTransition}>
                {menu.map((item, index) => (
                    <li key={item.key} className={pathname == item.url ? sidebarNavItemActive : sidebarNavItem}>{item.icon} <Link className={ml1} href={item.url}>{item.title}</Link></li>
                ))}
            </ul>

            {!show && <div className={blackBox} onClick={() => setShow(!show)}></div>}

        </aside>
    )
}

export default Sidebar