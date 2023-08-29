import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import InputGroup from "react-bootstrap/InputGroup";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Dropdown from "react-bootstrap/Dropdown";
import LogoutModal from "./LogoutModal";
import {
  faBars,
  faPlusCircle,
  faHeadphonesAlt,
  faStar,
  faEdit,
  faSignOutAlt,
  faUserCircle,
  faVideo,
  faCog,
  faSearch,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  Navbar,
  Button,
  Form,
  InputGroup,
  FormControl,
  NavDropdown,
  Dropdown,
  Badge,
} from "react-bootstrap";
import logo from "@/assets/img/logo.png";
import avatar from "@/assets/img/user.png"

interface NavigationProps {
  props: {
    setShowMenu: (showMenu: boolean) => void;
    showMenu: boolean;
  };
}

const Navigation: React.FC<NavigationProps> = ({ props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
  };

  const handleMenuToggle = () => {
    props.setShowMenu(!props.showMenu);
  };

  return (
    <>
      <Navbar bg="white" sticky="top" className="osahan-nav">
        &nbsp;&nbsp;
        <Button
          variant="link"
          size="sm"
          className="order-1 order-sm-0 text-secondary"
          id="sidebarToggle"
          onClick={handleMenuToggle}
        >
          <FontAwesomeIcon icon={faBars} />
          <i className="fas fa-star"></i>
        </Button>
        &nbsp;&nbsp;
        <Navbar.Brand className="mr-1">
          <Link href="/">
            <img className="img-fluid" src={logo.src} alt="" />
          </Link>
        </Navbar.Brand>
        {/* Navbar Search*/}
        <Form
          // inline
          className="d-none d-md-inline ms-auto  my-2 my-md-0 osahan-navbar-search"
        >
          <InputGroup>
            <FormControl type="text" placeholder="Search for..." className="" />
            <div className="searchButtonContainer">
              <Button variant="light" className="searchButton">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </InputGroup>
        </Form>
        {/*Navbar*/}
        <ul className="navbar-nav ms-auto ms-md-0 osahan-right-navbar">
          <li className="nav-item mx-1">
            <Link href="/upload" className="nav-link">
              <FontAwesomeIcon icon={faPlusCircle} fixedWidth />{" "}
              <span className="d-none d-md-inline">Upload Video</span>
            </Link>
          </li>

          <NavDropdown
            title={
              <>
                <FontAwesomeIcon icon={faBell} fixedWidth />
                <span className="badge bg-danger">9+</span>
              </>
            }
            id=""
            className="mx-1 no-arrow"
          >
            <NavDropdown.Item href="#">
              <FontAwesomeIcon icon={faEdit} fixedWidth />
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <FontAwesomeIcon
								icon={faHeadphonesAlt}
								fixedWidth
							/>{" "}
              Another Action
            </NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item href="#">
              <FontAwesomeIcon icon={faStar} fixedWidth />{" "}
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
				<span className="badge bg-danger">7</span>
              </>
            }
            id=""
            className="mx-1 no-arrow"
          >
            <NavDropdown.Item href="#">
              <FontAwesomeIcon icon={faEdit} fixedWidth /> 
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <FontAwesomeIcon
								icon={faHeadphonesAlt}
								fixedWidth
							/>{" "}
              Another Action
            </NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item href="#">
              <FontAwesomeIcon icon={faStar} fixedWidth />{" "}
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                <img src={avatar.src} alt="Avatar" />
                <span className="d-none d-md-inline"> Osahan</span>
              </>
            }
            id=""
            className="no-arrow osahan-right-navbar-user user-dropdown-link"
          >
            <Link
              href="/account"
              className="dropdown-item btn"
              // rolw="button"
            >
              <FontAwesomeIcon icon={faUserCircle} fixedWidth />{" "}
              My Account
            </Link>
            <Link
              href="/subscriptions"
              className="dropdown-item btn"
              // rolw="button"
            >
              <FontAwesomeIcon icon={faVideo} fixedWidth />{" "}
              Subscriptions
            </Link>
            <Link href="/settings" className="dropdown-item">
              <FontAwesomeIcon icon={faCog} fixedWidth /> 
              Settings
            </Link>
            <Dropdown.Divider />
            <Link href="#" onClick={handleShow} className="dropdown-item">
              <FontAwesomeIcon icon={faSignOutAlt} fixedWidth />{" "}
              Log out
            </Link>
          </NavDropdown>
        </ul>
      </Navbar>

      <LogoutModal
        show={show}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navigation;
