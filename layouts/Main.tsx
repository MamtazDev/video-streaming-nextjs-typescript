import Navigation from '@/components/Navigation/Navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { useState } from 'react';


interface ContentProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Main = ({children}:any) => {
    const [showMenu, setShowMenu] = useState(false);
    const props: ContentProps ={showMenu,setShowMenu}
    return (
        <>
            <div className="homepage-wrapper">
            <Navigation props={props} />
            <div id="wrapper">
                <Sidebar props={props}/>
                {children}
            </div>
            </div>
        </>
    );
};

export default Main;