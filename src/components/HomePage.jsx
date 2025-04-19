import React, { Suspense } from 'react'
import Header from './Header'
import Banner from './Banner';
import LogoShowcase from './LogoShowcase';
import { Loader } from './Loader';
import AnimatedCounter from './AnimatedCounter';
import Roadmap from './Roadmap';
import Moments from './Moments';
import RickBanner from './RickBanner';

export const HomePage = () => {
  return (
    <>
    <Suspense fallback={null}>
    <Header/>
    <Banner/>
    <LogoShowcase/>
    <AnimatedCounter/>
    <Moments/>
    <LogoShowcase/>
    <RickBanner/>
    <LogoShowcase/>
    {/* <Roadmap/> */}
    </Suspense>
   
    </>
   
  );
}

