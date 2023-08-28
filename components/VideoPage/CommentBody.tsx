import React from "react";
import { CommentMedia, CustomMedia } from "./CommentMedia";

interface CommentBodyProps {}

const CommentBody: React.FC<CommentBodyProps> = () => {
  return (
    <>
      <CustomMedia commentCount={0}  />
      <CommentMedia
        commentAuthor="Gurdeep Osahan"
        commentBody="reacthe last order. Even though they had Chefs in their open kitchen they weren’t flexible to dish out few more items. Anyway the food was super specially their stone dessert."
        timeAgo="11 months"
        unlikesCount="123"
        likesCount="02"
      />

      <CommentMedia
        commentAuthor="Gurdeep Osahan"
        commentBody="Was here impromptu in their first week, reacthe last order. Even though they had Chefs in their open kitchen they weren’t flexible to dish out few more items."
        timeAgo="11 months"
        likesCount="123"
       
      />
    </>
  );
};

export default CommentBody;
