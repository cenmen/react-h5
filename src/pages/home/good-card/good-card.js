import React, { useState, useEffect } from "react"

import styles from "./good-card.css"

export default function GoodCard(props) {
  const {value} = props

  return (
    <div className={styles.card_container} onClick={() => onClickCard()}>
      <img className={styles.card_cover} src={value.cover} />
      <div className={styles.card_desc}>
        <div className={styles.card_title}>{value.title}</div>
        <div className={styles.card_content}>{value.content}</div>
      </div>
    </div>
  )
}
