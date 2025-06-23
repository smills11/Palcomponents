import React from "react";

import CommentList from "./index";

export default {
  title: "PAL-UI-Components/Comment List",
  component: CommentList,
};

const Template = (args) => {
  return (
    <div style={{ width: "100%", padding: "2rem" }}>
      <CommentList {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  comments: [
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#6b5b95",
      authorName: "Emily Johnson",
      commentText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#f7786b",
      authorName: "Michael Davis",
      commentText: "Interesting perspectives. Well-written.",
    },
    {
      defaultColor: "#78c0a8",
      authorName: "Sarah Lee",
      commentText: "Enjoyed reading this. Thought-provoking.",
    },
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#e15f41",
      authorName: "David Nguyen",
      commentText:
        "Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.",
    },
    {
      defaultColor: "#7a5195",
      authorName: "Jessica Chen",
      commentText: "This was a fantastic read. Well done!",
    },
  ],
};

export const WithMoreToggle = Template.bind({});
WithMoreToggle.args = {
  ...Default.args,
  showMoreToggle: true,
  commentsLimit: 1,
};
