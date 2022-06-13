import './App.css';
import Header from './Components/header/Header.jsx';
import NavBar from './Components/navbar/NavBar.jsx';
import React from 'react';
import {Route, Routes,} from 'react-router-dom';
import Profile from './Components/profile/Profile.jsx';
import Dialogs from './Components/dialogs/Dialogs.jsx';

 const App = (props) => {
  return(
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className="changeLand">
        <Routes>
          <Route path="/dialogs*" element={<Dialogs store={props.store} state={props.state} dialogs={props.state.dialogsPage.dialogsItem} 
          messages={props.state.dialogsPage.messages}  />} />

          
          <Route path="/profile" element={ <Profile 
          posts={props.state.profilePage.posts}
           state={props.state}
           dispatch={props.dispatch}
           /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
