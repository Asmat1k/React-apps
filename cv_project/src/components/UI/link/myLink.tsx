import React from "react";
import styles from './myLink.module.scss'

const MyLink = ({ link }: Record<string, string>) => {
  return (
    <a target="_blank" rel="noreferrer" href={link} className={styles.myLink}>CERTIFICATE</a>
  )
}

export default MyLink;