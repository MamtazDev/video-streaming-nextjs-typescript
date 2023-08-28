import React, { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string | undefined;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  className = undefined,
}) => {
  return (
    <div id="content-wrapper" className={className}>
      {children}
    </div>
  );
};

export default ContentWrapper;
