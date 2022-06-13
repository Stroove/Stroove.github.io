const ADD_POST = 'addPost';
const UPDATE_TEXTAREA = 'updateTextarea';
const UPDATE_NEW_MESSAGE = 'updateNewMessage';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _callSubscriber(){
        console.log('State changed');
    },
    _state:{
        dialogsPage:{
            dialogsItem: [
                {name:'David', age:14, id:'1'},
                {name:'Arsen', age:14, id:'2'},
                {name:'Mom', age:14, id:'3'},
                {name:'Bob', age:14, id:'4'},
                {name:'Ben', age:14, id:'5'},
                {name:'Dan', age:14, id:'6'},
            ],
            messages:[
                {id:1, message:'Hi'},
                {id:2, message:'Yeah'},
                {id:3, message:'Nice'},
                {id:4, message:'Join to my team'},
                {id:5, message:'Hello Bro'},
                {id:6, message:"Im'looking for a new keeper for my team"},
            ],
            newMessageBody:'',
        },
        profilePage:{
            posts:[
                {id:1, text:'Hello', likesCount:10},
                {id:2, text:'Hello everyone', likesCount:10},
                {id:3, text:'Hello everyone', likesCount:10},
                {id:4, text:'Hello everyone', likesCount:5},
            ],
            newPostText: '',
    
        }
    },
    getState(){
        return this._state;
    },
    _addPost(text){
        // let lastId = state.profilePage.posts.lenght + 1;
        let newPost = {
            // id: {lastId},
            id:1,
            text: text,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        text = '';
    },
    _updateTextarea(txt){
        this._state.profilePage.newPostText = txt;
        this._callSubscriber(this._state);
    },
    _updateNewMessage(){
        
    },
    // goPost(){
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer){
        this._callSubscriber = observer; // наблюдатель
    },


    dispatch(action){
        if(action.type === ADD_POST){
            this._addPost(action.addPostText)
        } else if(action.type === UPDATE_TEXTAREA){
            this._updateTextarea(action.updateTextareaTxt)
        }else if (action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state)
        }else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:6, message:body, })
            this._callSubscriber(this._state);

        }

    }
}

export const addPostActionCreator = (text) =>{
    return {
        type: ADD_POST,
        addPostText:text,
    }
}
export const updateTextareaActionCreator = (text) =>{
    return {
        type: UPDATE_TEXTAREA,
        updateTextareaTxt:text,
    }
}
export const sendMessageActionCreator = () =>{
    return {
        type: SEND_MESSAGE,
    }
}


export const updateNewMessageActionCreator = (body) =>{
    return {
        type: UPDATE_NEW_MESSAGE,
        id:6,
        message: body,
    }
}

window.store = store;

export default store;