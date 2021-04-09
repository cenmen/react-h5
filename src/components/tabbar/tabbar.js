import React from "react"
import { Link } from "react-router-dom";
import styles from './tabbar.css'

export default function Tabbar(props) {
    return (
        <div id="tabbar" className={styles.fix_bottom}>
            <div className={styles.item_content}>
                {props.tabbar.map(item => 
                    <Link className={styles.item} key={item.name} to={item.path}>
                        {item.icon && <img className={styles.icon} src={item.icon}></img>}
                        {item.class && <i className={item.class + ' ' + styles.icon_font}></i>}
                        <span className={styles.name}>{item.name}</span>
                    </Link>
                )}
            </div>
        </div>
    )
}