import React from 'react';
import { AccordTypes } from '@/types/AccordType';
import style from "./Question.module.scss";
import PlusMinus from '../PlusMinus/PlusMinus';





const Question: React.FC<AccordTypes> = ({ heading, paragraph }) => {
    return (
        <> 
        <div className={style.Question}>
            <div className={style.questionHeading}>
                <h3>{heading}</h3>
                <PlusMinus/>
            </div>
            {/* {isActive && */}
             <p className={style.paragraph}>{paragraph}</p>
             {/* } */}
            
        </div>
        </>
    )
}

export default Question