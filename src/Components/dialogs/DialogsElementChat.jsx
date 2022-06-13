import React from "react";
import './dialogsElementChat.css';


let DialogsElementChat = (props) => {
    return (
        <div className="dialogs__chat">{props.text}</div>
    );
}

export default DialogsElementChat;
