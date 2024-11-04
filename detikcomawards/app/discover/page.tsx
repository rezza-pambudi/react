"use client"

import footer from '@/components/footer/footer'
import mainBlock from '@/components/main-block/main-block'
import Navbar from '@/components/navbar/navbar'
import React from 'react'
import sectionNewsList from './news-list/page'

export default function Discover() {
  return (
    <>
    {Navbar()}
    {mainBlock()}
    {sectionNewsList()}
    {footer()}
    </>
  )
}
