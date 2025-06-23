import React from "react";

import ChatFeed from "./index";

export default {
  title: "PAL-UI-Components/Chat Feed",
  component: ChatFeed,
  argTypes: {
    classNames: { control: "text" },
  },
};

const Template = (args) => {
  return (
    <div style={{ width: "100%", padding: "2rem" }}>
      <ChatFeed {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  categoryText: "General",
  messages: [
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#6b5b95",
      authorName: "Emily Johnson",
      messageText: "This is a great article! I learned a lot.",
      type: "message",
    },
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#f7786b",
      authorName: "Michael Davis",
      messageText: "Interesting perspectives. Well-written.",
      type: "message",
    },
    {
      defaultColor: "#78c0a8",
      authorName: "Sarah Lee",
      messageText: "Enjoyed reading this. Thought-provoking.",
      type: "media/image",
      url: "https://pal-media.s3.us-east-1.amazonaws.com/1736889479283--SampleJPGImage_1mbmb.jpg",
    },
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#e15f41",
      authorName: "David Nguyen",
      messageText:
        "Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.",
      type: "message",
    },
    {
      defaultColor: "#7a5195",
      authorName: "Jessica Chen",
      messageText: "This was a fantastic read. Well done!",
      isNew: true,
      type: "message",
    },
  ],
};
