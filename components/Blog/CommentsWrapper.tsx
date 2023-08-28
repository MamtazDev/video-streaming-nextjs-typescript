// export default function CommentsWrapper({ children }) {
//   return (
//     <div className="card padding-card reviews-card mb-4">
//       <div className="card-body">
//         <h5 className="crad-title mb-4">3 Reviews</h5>
//         {children}
//       </div>
//     </div>
//   );
// }



import React, { ReactNode } from "react";

interface CommentsWrapperProps {
  children: ReactNode;
}

const CommentsWrapper: React.FC<CommentsWrapperProps> = ({ children }) => {
  return (
    <div className="card padding-card reviews-card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4">3 Reviews</h5>
        {children}
      </div>
    </div>
  );
};

export default CommentsWrapper;
