import React from 'react'
import Image from 'next/image'
import Profile from "@/app/images/background-pattern-desktop.svg"
import style from "@/components/MainPage/MainPage.module.scss";
import Accordian from '../Accordian/Accordian';
const MainPage: React.FC = () => {
  return (
    <>
        <div className={style.mainPage}>
            <Image src={Profile} width={1440} height={320} alt='Image not found'/>

            <Accordian/>
        </div>
    </>
  )
}

export default MainPage