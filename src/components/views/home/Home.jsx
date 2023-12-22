"use client";
import React, { useState } from 'react';
import { styles } from './HomeStyle';
import { Button, Input, message } from 'antd';
import { CarOutlined, KeyOutlined, MailOutlined, UserOutlined, PhoneOutlined, DashOutlined, DashboardOutlined, LogoutOutlined } from '@ant-design/icons';
import TableElement from '@/components/ui-elements/table/TableElement';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

function Main() {
  const pathname = usePathname()
  console.log(pathname)
  const { container, header, nav, footer, aside, main, menu, menuItem, footerText, telText, card, table, cardHeading, cardCount, sidebardNav, sidebarNavItem, sidebarNavItemActive, flexCenter } = styles.classes;
  
  return (
    <>
      <div className={container}>
        <header className={header}>
          <p className={telText}><PhoneOutlined />: <a href='tel:03016906650'>&nbsp;03165671665</a></p>
        </header>
        <nav className={nav}>
          <ul className={menu}>
            <li className={menuItem}><Link href='/profile' className={flexCenter}><UserOutlined/>&nbsp;Profile</Link></li>
            <li className={menuItem}><Link href={'/login'}  className={flexCenter}><LogoutOutlined /> &nbsp;Logout</Link></li>
          </ul>
        </nav>
        <aside className={aside}>
          <ul className={sidebardNav}>
          <li className={pathname == "/" ? sidebarNavItemActive:sidebarNavItem}><DashboardOutlined /> <Link className='ml-1' href={'/'}>Dashboard</Link></li>
          <li className={pathname == "/profile" ? sidebarNavItemActive:sidebarNavItem}><UserOutlined /> <Link className='ml-1' href={'/profile'}>Profile</Link></li>
            <li className={pathname == "/logout" ? sidebarNavItemActive:sidebarNavItem}><LogoutOutlined /> <Link className='ml-1' href={'/logout'}>Logout</Link></li>
            
          </ul>
        </aside>
        <main className={main}>
          <div className={card}>
            <p className={cardHeading}>Total Parked</p>
            <p className={cardCount}>1000</p>
          </div>
          <div className={card}>
            <p className={cardHeading}>Total Parked</p>
            <p className={cardCount}>1000</p>
          </div>
          <div className={card}>
            <p className={cardHeading}>Total Parked</p>
            <p className={cardCount}>1000</p>
          </div>
          <div className={card}>
            <p className={cardHeading}>Total Parked</p>
            <p className={cardCount}>1000</p>
          </div>
          <div className={table}>
            {/* <TableElement /> */}
            table
          </div>

        </main>
        <footer className={footer}>
          <p className={footerText}>All Rights Reserved @ 2024</p>
        </footer>
      </div>
    </>
  )
}

export default Main