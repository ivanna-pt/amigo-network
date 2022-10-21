import React from "react";
import style from './Timeline.module.css';

const LifeEvents = () => {
    return (
        <div className='card'>
            <div className={style.cardHeader}>
                <h4>Life Event</h4>
            </div>
            <div className={style.cardBody}>
                <div>
                    Some content here
                </div>
            </div>
        </div>
    )
}

export default LifeEvents;