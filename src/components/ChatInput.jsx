import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { db } from '../firebase';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'

const ChatInput = ({channelName, channelId, chatRef}) => {
  
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if(!channelId){
        return false;
    }

    const docRef = doc(db, 'rooms', channelId);
    const colRef = collection(docRef, 'messages');
    addDoc(colRef, {
        message: input,
        timestamp: serverTimestamp(),
        user: "Tan Wei Yan",
        userImage: "https://portfolio-weiyan1289.vercel.app/_nuxt/img/profile.f137f99.jpg",
    });
        
    chatRef?.current?.scrollIntoView({
        behavior: 'smooth',
    });

    setInput("");
  }


  return (
    <ChatInputContainer>
        <form action="">
            <input 
                value={input}
                onChange={(e) => setInput((e.target.value))}
                placeholder={`Message #${channelName}`}  
            />
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > Button {
        display: none !important;
    }
`;
