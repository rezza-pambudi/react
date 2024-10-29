import footer from '@/components/footer/footer'
import mainBlock from '@/components/main-block/main-block'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

export default function Discover() {
  return (
    <>
    {Navbar()}
    {mainBlock()}
    {footer()}
    </>
  )
}
