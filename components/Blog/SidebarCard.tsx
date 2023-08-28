import React, { ReactNode } from 'react';

interface SidebarCardProps {
	children: ReactNode;
	title?: string;
	noTitle?: boolean | null;
}

const SidebarCard: React.FC<SidebarCardProps> = ({ children, title = 'Untitled', noTitle = null }) => {
	return (
		<div className="card sidebar-card mb-4">
			<div className="card-body">
				{noTitle ? '' : <h5 className="card-title mb-3">{title}</h5>}
				{children}
			</div>
		</div>
	);
};

export default SidebarCard;
