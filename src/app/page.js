'use client'
import Image from "next/image";
import styles from "./page.module.css";
 


import Form from "./signup/Form";

export default function Home( { requestName }) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      
      <Form />

      


      </main>
     
    </div>
  );
}
