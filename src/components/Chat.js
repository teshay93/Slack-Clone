import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from 'firebase';

const Chat = ({user}) => {
  const { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  //MESSAGES FUNCTION
  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timeStamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        console.log(messages);
        setMessages(messages);
      });
  };
// Function Allows for messages to be sent
  const sendMessage = (text) => {
      if (channelId) {
        let payload = {
          text: text,
          timeStamp: firebase.firestore.Timestamp.now(),
          user: user.name,
          userImage: user.photo
        }
        db.collection("rooms").doc(channelId).collection('messages').add(payload)
      }
  }

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName> # {channel && channel.name}</ChannelName>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <ChatContainer>
        <ChatMessage />

        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timeStamp={data.timestamp}
            />
          ))}
      </ChatContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
};

//STYLED COMPONENTS
const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  justify-content: space-between;
`;

const ChatContainer = styled.div``;

const Channel = styled.div``;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;

const ChannelName = styled.div`
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;

export default Chat;
