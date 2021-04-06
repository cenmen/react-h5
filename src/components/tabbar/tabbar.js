import React from "react"
import './tabbar.css'

export default function Tabbar(props) {
    return (
        <div id="tabbar" className="fix-bottom">
            <div className="item-content">
                {props.tabbar.map(item => 
                    <div className="item" key={item.name}>
                        <img className="icon" src={item.icon}></img>
                        <span className="name">{item.name}</span>
                    </div>
                )}
            </div>
        </div>
    )
}