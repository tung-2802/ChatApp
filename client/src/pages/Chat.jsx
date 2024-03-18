import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../components/chat/PotentialChats";
import ChatBox from "../components/chat/ChatBox";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);

  return (
    <Container>
      <PotentialChats></PotentialChats>
      {isUserChatsLoading ? (
        <p>Loading chats...</p>
      ) : userChats && userChats.length > 0 ? (
        <Stack direction="horizontal" gap={4} className="align-items-start">
          <Stack className="messages-box flex-grow-0">
            {userChats.map((chat, index) => (
              <div key={index} onClick={() => updateCurrentChat(chat)}>
                <UserChat chat={chat} user={user} />
              </div>
            ))}
          </Stack>
          <ChatBox />
        </Stack>
      ) : (
        <p>No chats available</p>
      )}
    </Container>
  );
};

export default Chat;
