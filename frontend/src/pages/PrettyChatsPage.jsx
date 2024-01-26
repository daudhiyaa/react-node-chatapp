import { PrettyChatWindow } from "react-chat-engine-pretty";

const PrettyChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="Project-ID-XXXX"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default PrettyChatsPage;
