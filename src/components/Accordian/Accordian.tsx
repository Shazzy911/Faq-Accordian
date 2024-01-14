import React from 'react'
import style from "./Accordian.module.scss";
import Image from 'next/image';
import star from "@/app/images/icon-star.svg";
import AccordData from '@/types/AccordType';
import Question from '../Question/Question';
const Accordian: React.FC = () => {
    return (
        <>
            <div className={style.Accordian}>
                <div className={style.FAQ}>
                    <Image src={star} width={38} height={38} alt='Image not Found' className={style.star}/>
                    <h1>FAQs</h1>
                </div>
                {
                    AccordData.map(({ id, heading, paragraph }) => (
                        <Question key={id} heading={heading} paragraph={paragraph} />
                    ))
                }



            </div>
        </>
    )
}

export default Accordian