import React from 'react';
import SignIn from './containers/SignIn'
import NavBar from './components/NavBar'
import ResetPass from './containers/ResetPass'
import { Success } from './components/Modal'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <Success value='RESET SUCCESSFULLY' /> */}
      {/* <SignIn /> */}
      <ResetPass />
    </div>
  );
}

export default App;
