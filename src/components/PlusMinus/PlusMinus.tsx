"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Minus from "@/app/images/icon-minus.svg";
import Plus from "@/app/images/icon-plus.svg";
import style from "./PlusMinus.module.scss";

const PlusMinus: React.FC = () => {
    useState
    const [isActive, setIsActive] = useState(false);

    const openHandle = (e: React.MouseEvent<HTMLImageElement>) => { 
        setIsActive(true);
        console.log({message: true});
     }
     const closeHandle = (e: React.MouseEvent<HTMLImageElement>) => { 
        setIsActive(false);
        console.log({message: false});

     }
    return (
        <>

            <div className={style.plusMinus}>
                <Image src={Minus} height={30} width={30} alt='Image not Found' onClick={closeHandle} />
                <Image src={Plus} height={30} width={30} alt='Image not Found' onClick={openHandle}/>
            </div>
        </>
    )
}

export default PlusMinus;