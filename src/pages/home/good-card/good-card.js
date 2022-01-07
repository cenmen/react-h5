import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './good-card.css'

export default function GoodCard(props) {
  const { value } = props
  let history = useHistory()

  return (
    <div className={styles.card_container} onClick={() => history.push(`/detail/${value.id}`)}>
      <img className={styles.card_cover} src={value.cover} />
      <div className={styles.card_desc}>
        <div className={styles.card_title}>{value.title}</div>
        <div className={styles.card_content}>{value.content}</div>
      </div>
    </div>
  )
}
