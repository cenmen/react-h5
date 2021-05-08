import React from "react"
import { useHistory } from "react-router-dom"
import styles from './tabbar.css'

export default function Tabbar(props) {
  let history = useHistory()

  function onChangeTab(path) {
    history.push(path)
  }
  
  return (
    <div id="tabbar" className={styles.fix_bottom}>
      <div className={styles.item_content}>
        {props.tabbar.map(item => 
          <div className={styles.item} key={item.name} onClick={() => onChangeTab(item.path)}>
            {item.icon && <img className={styles.icon} src={item.icon}></img>}
            {item.class && <i className={item.class + ' ' + styles.icon_font}></i>}
            <span className={styles.name}>{item.name}</span>
          </div>
        )}
      </div>
    </div>
  )
}