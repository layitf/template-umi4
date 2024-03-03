import React from "react";
import styles from "./index.less";
import yayJpg from "../assets/yay.jpg";

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>
        <img src={yayJpg} width='388' />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
