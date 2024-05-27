import React from "react"
import styles from './Footer.module.css'
export default function Footer() {
    return <><footer><p id={styles["footerDeveloperText"]}>Website by Tilen Marš</p> <a className={styles["footerDeveloperInstagram"]} href="http://instagram.com/tilenmars" id="developerInstagram">@tilenmars</a></footer></>
}