import React from 'react'
import { styles } from './sidebarStyle';
import { menu } from './sidebarMenu';
import { usePathname } from 'next/navigation';
import { DashboardOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Sidebar() {
    const pathname = usePathname()
    console.log(pathname)
    const { aside, sidebarNavItem, sidebardNav, sidebarNavItemActive, ml1 } = styles.classes;
    return (

        <aside className={aside}>
            <ul className={sidebardNav}>
                {menu.map((item, index) => (
                    <li key={item.key} className={pathname == item.url ? sidebarNavItemActive : sidebarNavItem}>{item.icon} <Link className={ml1} href={item.url}>{item.title}</Link></li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar