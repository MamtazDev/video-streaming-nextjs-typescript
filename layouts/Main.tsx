import { CustomScrollToTop } from '@/components/Atomics/ScrollToTop/ScrollToTop';
import Navigation from '@/components/Navigation/Navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';


interface ContentProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Main = ({children}:any) => {
    const [showMenu, setShowMenu] = useState(false);
    const props: ContentProps ={showMenu,setShowMenu}

    useEffect(() => {
        if (showMenu) {
          document.body.classList.add("sidebar-toggled");
        } else {
          document.body.classList.remove("sidebar-toggled");
        }
      }, [showMenu]);
    return (
        <>
            <div className="homepage-wrapper">
            <Navigation props={props} />
            <div id="wrapper">
                <Sidebar props={props}/>
                {children}
            </div>
            <ScrollToTop
          smooth
          component={<CustomScrollToTop />}
          className="scroll-to-top outline-0"
          color="white"
        />
            </div>
        </>
    );
};

export default Main;