import React from 'react'
import { styles } from './headerStyle';
import { CarOutlined, PhoneOutlined } from '@ant-design/icons';

function Header() {
    const { header, telText, logo } = styles.classes;
    return (
        <header className={header}>
            <span className={logo}><CarOutlined/>&nbsp; CPMS</span>
            <span className={telText}><PhoneOutlined />: <a href='tel:03016906650'>&nbsp;03165671665</a></span>
        </header>
    )
}

export default Header