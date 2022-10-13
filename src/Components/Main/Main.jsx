import React from "react";
import style from './Main.module.css'

const Main = (props) => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                {props.children}
            </div>
        </main>
    )
}

export default Main;