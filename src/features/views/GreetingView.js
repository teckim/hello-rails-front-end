import React from "react";
import { useSelector } from 'react-redux';
import { selectRandomMessage } from "../message/messageSlice";
import Message from "../message/Message";

const GreetingView = () => {
  const message = useSelector(selectRandomMessage);

  return <Message message={message} />
}

export default GreetingView;
