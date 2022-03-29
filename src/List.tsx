import React from "react";
import { IMessage } from "./App";
import SingleMessage from "./SingleMessage";

interface IProps {
  messages: IMessage[];
  deleteMessage: (id: number) => void;
}

const List: React.FC<IProps> = ({ messages, deleteMessage }) => {
  return (
    <>
      {messages.map((message) => {
        return (
          <SingleMessage
            id={message.id}
            text={message.message}
            key={message.id}
            deleteMessage={deleteMessage}
          />
        );
      })}
    </>
  );
};

export default List;
