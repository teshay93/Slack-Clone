import React from "react";
import styled from "styled-components";

const ChatMessage = ({text, name, image, timestamp}) => {
  return (
    <Container>
      <UserAvatar>
        <img src={image} />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>3/4/2021 12:32 PM</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
};


//STYLED COMPONENTS
const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 8px;
  overflow: hidden;
  border-radius: 2px;

  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgba(97, 96, 97);
    font-size: 13px;
  }
`;

const Text = styled.span``;

export default ChatMessage;
