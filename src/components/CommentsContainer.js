/* eslint-disable no-unused-vars */
import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Sanket Dhokchaule",
    comment: "I'm the best",
    replies: [
      { name: "Sanket Dhokchaule", comment: "I'm the best", replies: [] },
    ],
  },
  {
    name: "Sanket Dhokchaule",
    comment: "I'm the best",
    replies: [
      {
        name: "Sanket Dhokchaule",
        comment: "I'm the best",
        replies: [
          {
            name: "Sanket Dhokchaule",
            comment: "I'm the best",
            replies: [
              {
                name: "Sanket Dhokchaule",
                comment: "I'm the best",
                replies: [
                  {
                    name: "Sanket Dhokchaule",
                    comment: "I'm the best",
                    replies: [
                      {
                        name: "Sanket Dhokchaule",
                        comment: "I'm the best",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;

  return (
    <div className="flex bg-gray-200 p-2 rounded-lg my-2">
      <img className="w-10 h-10" alt="user_icon" src={USER_ICON} />
      <div className="mx-2">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mx-3 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
