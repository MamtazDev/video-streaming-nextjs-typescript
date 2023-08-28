import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ListItemProps {
	name: string;
}

const ListItem: React.FC<ListItemProps> = ({ name }) => {
	return (
		<li>
			<a href="#" className="sidebar-list-link">
				{/* <FontAwesomeIcon icon={faChevronRight} /> */}
				 {name}
			</a>
		</li>
	);
};

interface SidebarListProps {
	children: ReactNode;
}

const SidebarList: React.FC<SidebarListProps> = ({ children }) => {
	return <ul className="sidebar-card-list">{children}</ul>;
};

export { ListItem, SidebarList };
export default SidebarList;
