import styles from "./Footer.module.css"
import config from "../package.json"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p> 
                <a href="https://github.com/can-dy-jack/mininote">{ config.name }@{ config.version }</a> &#169; { new Date().getFullYear() } GitHub, Inc.
            </p>
        </footer>
    )
}