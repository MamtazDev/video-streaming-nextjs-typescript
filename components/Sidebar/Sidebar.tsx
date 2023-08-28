import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import ChannelSidebarList from "./ChannelSidebarList";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUserAlt,
  faVideo,
  faCloudUploadAlt,
  faFolder,
  faHistory,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface SidebarProps {
  props: {
    showMenu?: boolean;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ props }) => {
  const sidebarClass = props.showMenu
    ? "sidebar navbar-nav toggled"
    : "sidebar navbar-nav";

  return (
    <>
      <ul className={sidebarClass}>
      <NavItem href="/" faIcon={faHome} label="Home" active />
        <NavItem href="/channels" faIcon={faUsers} label="Channels" />

        <NavItem href="/single-channel" faIcon={faUserAlt} label="Single Channel" />
        <NavItem href="/video-page" faIcon={faVideo} label="Video Page" />
        <NavItem href="/upload-video" faIcon={faCloudUploadAlt} label="Upload Video" />

        <NavDropdown
				  as="li"
				  title={<>
					  <FontAwesomeIcon icon={faFolder} fixedWidth /> 
					  
					  <span>Pages</span>
				  </>} id={""}        >
          <Dropdown.Header>Login Screens:</Dropdown.Header>

          <Link href="/auth/login" className="dropdown-item">
            Login
          </Link>

          <Link href="/auth/register" className="dropdown-item">
            Register
          </Link>

          <Link href="/auth/forget-password" className="dropdown-item">
            Forget Password
          </Link>
          <NavDropdown.Divider />
          <Dropdown.Header>Other pages:</Dropdown.Header>

          <Link href="/blog" className="dropdown-item">
            Blog
          </Link>

          <Link href="/blog-details" className="dropdown-item">
            Blog Details
          </Link>

          <Link href="/blank" className="dropdown-item">
            Blank Page
          </Link>

          <Link href="/FourZeroFour" className="dropdown-item">
            404 Page
          </Link>

          <Link href="/contact" className="dropdown-item">
            Contact
          </Link>
        </NavDropdown>

        <NavItem href="/history" faIcon={faHistory} label="History Page" />

        <NavDropdown
				  title={<>
					  <FontAwesomeIcon icon={faListAlt} fixedWidth /> 
					  <span>Categories</span>
				  </>} id={""}        >
          <Link href="/categories" className="dropdown-item">
            Movie
          </Link>

          <Link href="/categories" className="dropdown-item">
            Music
          </Link>

          <Link href="/categories" className="dropdown-item">
            Television
          </Link>
        </NavDropdown>

        <ChannelSidebarList />
      </ul>
    </>
  );
};

export default Sidebar;
