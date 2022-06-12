import React, { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({children} : AppLayoutProps) => {

    return (
        <div>
            레이아웃<br/>
            { children }
        </div>
    );
};

export default AppLayout;
