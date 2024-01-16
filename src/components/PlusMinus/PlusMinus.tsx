"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Minus from "@/app/images/icon-minus.svg";
import Plus from "@/app/images/icon-plus.svg";
import style from "./PlusMinus.module.scss";
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { setMenuOpen } from '@/app/redux/AccordionSlicer';
interface PlusMinusType {
    children: React.ReactNode;
    id: number | undefined;
}
const PlusMinus: React.FC<PlusMinusType> = ({id}) => {
    const dispatch = useAppDispatch();

    const menuOpen = useAppSelector((state: any)=> state.menu.menuOpen);
    return (
        <>
            <div className={style.plusMinus}>
                <Image src={Minus} height={30} width={30} key={id} alt='Image not Found' onClick={() => dispatch(setMenuOpen(false))} className={`${style.plusMinusImg && style.minus} ${menuOpen ? style.active : ''}`} />
                <Image src={Plus} height={30} width={30}  key={id} alt='Image not Found' onClick={()=> dispatch(setMenuOpen(true))} className={`${style.plusMinusImg && style.plus} ${menuOpen ? style.active : ''}`} />
            </div>
        </>
    )
}

export default PlusMinus;