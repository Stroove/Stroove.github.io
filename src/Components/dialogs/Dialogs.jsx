import React from "react";
import './dialogs.css';
import DialogsElement from './DialogsElement.jsx';
import DialogsElementChat from './DialogsElementChat.jsx';
import {Route, Routes} from 'react-router-dom';
import {updateTextareaActionCreator} from '../../state';

let Dialogs = (props) => {    

    let dialogsEl = props.dialogs.map(d => <DialogsElement name={d.name} id={d.id} /> )
    let dialogsMessages = props.messages.map(m => <Route path={'/'+ m.id} element={<DialogsElementChat  text={m.message}/>}/>)
    let newMessageBody = props.state.newMessageBody;
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateTextareaActionCreator(body)) 
    }
    let onSendMessageClick = () => {

    }
    
    return ( 
        <div className="dialogs">
            <div className="dialogs__items">
                <div className="dialogs__itemNames">
                    <ul>
                        {dialogsEl}
                    </ul>
                </div>
                <div className="dialogs__itemChats">
                    <Routes>
                        <div className="dialogs__messages">{dialogsMessages}</div>
                        <div className="dialogs__textarea"><input value={newMessageBody}
                                                            onChange={onNewMessageChange} type="textarea" /></div>
                        <div className="dialogs__addMessage" onClick={onSendMessageClick}>Send</div>
                    </Routes>
                </div>
                
            </div>
        </div>
    );
}


export default Dialogs;