import React from 'react'
import style from "./Accordian.module.scss";
import Image from 'next/image';
import star from "@/app/images/icon-star.svg";
import AccordData from '@/types/AccordType';
import Question from '../Question/Question';
interface AccordianType {
    children: React.ReactNode;
    menuOpen: boolean
}
const Accordian: React.FC<AccordianType> = ({children, menuOpen}) => {
    return (
        <>
            <div className={style.Accordian}>
                <div className={style.FAQ}>
                    <Image src={star} width={38} height={38} alt='Image not Found' className={style.star}/>
                    <h1>FAQs</h1>
                </div>
                {
                    AccordData.map(({ id, heading, paragraph }) => (
                        <Question key={id} id={id} heading={heading} paragraph={paragraph} menuOpen={menuOpen}/>
                    ))
                }
            </div>
        </>
    )
}
export default Accordian