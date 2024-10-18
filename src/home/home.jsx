import React from 'react'
import { Hero } from './hero/hero'
import { MainLayout } from '../layout/mainLayout';
import { FProducts } from '../components/fProducts/F-products';
import { Lproducts } from '../components/lProducts/L-products';

export const Home = () => {
    return (
        <div>
            <MainLayout>
                <Hero />
                <FProducts />
                <Lproducts />
            </MainLayout>
        </div>
    )
}   