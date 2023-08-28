import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp type from FontAwesome
import Link from "next/link";

interface NavItemProps {
  href: string;
  faIcon: any; // Use the IconProp type
  label: string;
  active?: boolean;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, faIcon, label, active, children }) => {
  return (
    <>
      <li className={active ? "nav-item active" : "nav-item"}>
        <Link href={href} className="nav-link">
          <FontAwesomeIcon icon={faIcon} fixedWidth /> <span>{label}</span>
        </Link>
      </li>
    </>
  );
};

export default NavItem;
