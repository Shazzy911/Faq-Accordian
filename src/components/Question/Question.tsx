import React from 'react';
import { AccordTypes } from '@/types/AccordType';
import style from "./Question.module.scss";
import PlusMinus from '../PlusMinus/PlusMinus';





const Question: React.FC<AccordTypes> = ({ id, heading, paragraph, menuOpen }) => {
    return (
        <> 
        <div className={style.Question} >
            <div className={style.questionHeading}>
                <h3>{heading}</h3>
                <PlusMinus id={id} children={undefined}/>
            </div>
             <p className={`${style.paragraph} ${menuOpen ? style.active : ''}`}>{paragraph}</p>
        </div>
        </>
    )
}

export default Question