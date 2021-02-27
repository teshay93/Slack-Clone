import React from "react";
import styled from "styled-components";

const ChatMessage = () => {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/37.jpg" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Jake C.
          <span>2/25/2021 12:31:55 AM</span>
        </Name>
        <Text>Challenge going strong!</Text>
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
