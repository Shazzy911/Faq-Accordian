import React from 'react'
import Image from 'next/image'
import Profile from "@/app/images/background-pattern-desktop.svg"
import style from "@/components/MainPage/MainPage.module.scss";
import Accordian from '../Accordian/Accordian';
const MainPage: React.FC = () => {
  return (
    <>
        <div className={style.mainPage}>
            <Image src={Profile} width={140} height={80} alt='Image not found' className={style.mainImage}/>

            <Accordian/>
        </div>
    </>
  )
}

export default MainPage