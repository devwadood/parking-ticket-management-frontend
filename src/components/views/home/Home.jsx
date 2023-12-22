"use client";
import React, { useState } from 'react';
import { styles } from './HomeStyle';
import TableElement from '@/components/ui-elements/table/TableElement';
import Layout from '@/components/shared/layout/layout';

function Main() {

  const {  main, card, table, cardHeading, cardCount } = styles.classes;
  
  return (
    <>
  <Layout>
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
       
      </Layout>
    </>
  )
}

export default Main