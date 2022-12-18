import React from 'react';
import { MainNavigation } from './main-navigation';
import { SliderComponents } from '../slider/slider';

type LayoutProps = {
    children: React.ReactElement;
};

export const Layout = (props: LayoutProps) => {
    return (
        <>
            <MainNavigation />
            <main>{props.children}</main>
            <SliderComponents />
        </>
    );
};
