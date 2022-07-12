import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { collection, addDoc } from '@firebase/firestore';

const SidebarOption = ({ Icon, title, addChannelOption }) => {
  
    const addChannel = () => {
        const channelName = prompt("Plase Enter the channel name");
        const colRef = collection(db, 'rooms');

        if(channelName) {
            addDoc(colRef, {
                name: channelName,
            })
        }
    };
    const selectChannel = () => {};

    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div` 
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: .9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
        margin: 0;
    }

    > h3 > span {
        padding: 15px;
    }
`;

const SidebarOptionChannel = styled.div` 

`;