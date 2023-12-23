"use client";
import React, { useState } from 'react';
import { styles } from './VerifyStyle';
import TableElement from '@/components/ui-elements/table/TableElement';
import Layout from '@/components/shared/layout/layout';

function Verify() {

  const {  main, card, table, cardHeading, cardCount, heading } = styles.classes;
  
  return (
    <>
  <Layout>
     
        <main className={main}>
        <div className={heading}>
          <h1>Verify</h1>
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
          <div className={card}>
            <p className={cardHeading}>Total Parked</p>
            <p className={cardCount}>1000</p>
          </div>
          <div className={table}>
            {/* <TableElement /> */}
            table
          </div>

        </main>
       
      </Layout>
    </>
  )
}

export default Verify