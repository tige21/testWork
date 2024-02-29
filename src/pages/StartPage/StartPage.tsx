import React from 'react'
import styles from './StartPage.module.scss'
import {INTRODUCTION} from "../../constants/start-constants.ts";


const StartPage: React.FC = () => (
    <div className={styles.container}>
        <div className={styles.text}>
            {INTRODUCTION}
        </div>
    </div>
)

export default StartPage
