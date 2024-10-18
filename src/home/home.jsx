import React from 'react'
import { Hero } from './hero/hero'
import { MainLayout } from '../layout/mainLayout';
import { FProducts } from '../components/fProducts/F-products';
import { Lproducts } from '../components/lProducts/L-products';
import { SHopexOffer } from '../components/shopex/shopexOffer';
import { Unique } from '../components/unique/unique';

export const Home = () => {
    return (
        <div>
            <MainLayout>
                <Hero />
                <FProducts />
                <Lproducts />
                <SHopexOffer />
                <Unique />
            </MainLayout>
        </div>
    )
}   