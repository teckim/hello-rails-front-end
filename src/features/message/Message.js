import React from "react";
import styles from './Message.module.css';

const Message = ({ message }) => <div className={styles.message}>{message}</div>;

export default Message;
