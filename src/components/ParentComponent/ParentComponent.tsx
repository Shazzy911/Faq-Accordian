"use client";

import React from 'react'
import Accordian from '../Accordian/Accordian';
import { useAppSelector } from '@/app/redux/hooks';

const ParentComponent: React.FC = () => {
    const menuOpen = useAppSelector((state: any)=> state.menu.menuOpen);
  return (
    <>
        <Accordian menuOpen={menuOpen} children={undefined}/>
    </>
  )
}
export default ParentComponent;