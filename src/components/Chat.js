import React from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Chat = () => {
  return (
    <Container>
      <ChatContainer>
      <HashTag>
        # clever
        <StarBorderIcon />
       </HashTag>
        Company-wide announcements and work based matters
        <Details>
          Details
          <InfoIcon />
        </Details>
      </ChatContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  left: 0;
  position: relative;
`;

const ChatContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  border-bottom: 1px solid #532753;
  height: 64px;
  width: 100%;
`;

const HashTag = styled.div`
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

export default Chat;
