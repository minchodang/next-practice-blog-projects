import React from 'react';

type LayoutProps = {
    children: React.ReactElement;
};

export const Layout = (props: LayoutProps) => {
    return (
        <>
            {/*<MainNavigation/>*/}

            <main>{props.children}</main>
        </>
    );
};
