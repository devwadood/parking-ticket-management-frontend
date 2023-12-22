import React from 'react'
import { styles } from './headerStyle';
import { PhoneOutlined } from '@ant-design/icons';

function Header() {
    const { header, telText } = styles.classes;
    return (
        <header className={header}>
            <p className={telText}><PhoneOutlined />: <a href='tel:03016906650'>&nbsp;03165671665</a></p>
        </header>
    )
}

export default Header