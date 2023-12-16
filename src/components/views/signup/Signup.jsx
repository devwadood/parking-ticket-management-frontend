"use client";
import React, { useState } from 'react';
import { styles } from './SignupStyle';
import { Button, Input, message } from 'antd';
import { CarOutlined, KeyOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = () => {
    message.info(email+" "+password);
  }

  const { container } = styles.styles;
  const { outer, inner, heading } = styles.classes;
  return (
    <div style={container} className={outer}>

      <div className={inner}>
        <h1 className={heading}>Signup <CarOutlined /></h1>
        <Input className='mb-4' size="large" placeholder="Name" type='text' prefix={<UserOutlined />} value={name} onChange={(e) => {
          setName(e.target.value)
        }} />
         <Input className='mb-4' size="large" placeholder="Email" type='text' prefix={<MailOutlined />} value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} />

        <Input size="large" className='mb-4' placeholder="Password" type='password' prefix={<KeyOutlined />} value={password} onChange={(e) => {
          setPassword(e.target.value)
        }} />
         <Input size="large" className='mb-4' placeholder="Confirm Password" type='password' prefix={<KeyOutlined />} value={confirmPassword} onChange={(e) => {
          setConfirmPassword(e.target.value)
        }} />
        <Button type='primary' className="bg-blue-950 w-full" onClick={(e) => {
          signup();
        }}>Signup</Button>
      </div>

    </div>
  )
}

export default Login