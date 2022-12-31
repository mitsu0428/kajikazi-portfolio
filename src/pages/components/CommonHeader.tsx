/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function CommonHeader() {
  return (
    <header className={styles.headerParent}>
      <div>
        <Image src="/kajitop.svg" width={80} height={80} alt="kaji-logo" />
      </div>
      <div>
        <Link href="/">
          <span className="ml-3 text-xl text-white">Home</span>
        </Link>
        <Link href="/about">
          <span className="ml-3 text-xl text-white">About</span>
        </Link>
        <Link href="/creation">
          <span className="ml-3 text-xl text-white">Creation</span>
        </Link>
      </div>
    </header>
  );
}
