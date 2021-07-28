import React from 'react';
import './App.css';
import todoList from './components/todoList';
import CounterOne from './components/UseReducer/counterOne';
import CounterTwo from './components/UseReducer/CounterTwo';
import Test1 from './components/UseContext/Test1';

import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';

import COunter from './components/RenderProps/COunter';
import User from './components/RenderProps/User';
import ClickCounter1 from './components/RenderProps/ClickCounter';
import UseEffectCounter from './components/useEffect/Counter';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <div>
        <UseEffectCounter></UseEffectCounter>
      </div>
      //=====================================HOC and render Props========================================================
      // <div>
      //   <COunter>
      //     {(count, incrementCount) => {
      //       return (
      //         <ClickCounter1
      //           count={count}
      //           incrementCount={incrementCount}
      //         ></ClickCounter1>
      //       );
      //     }}
      //   </COunter>
      //   {/* <COunter
      //     render={(count, incrementCount) => {
      //       return (
      //         <ClickCounter1
      //           count={count}
      //           incrementCount={incrementCount}
      //         ></ClickCounter1>
      //       );
      //     }}
      //   ></COunter> */}
      //   {/* <User
      //     render={(isLoggedIn) => (isLoggedIn ? 'manpreet' : 'Guest')}
      //   ></User> */}
      //   {/* <ClickCounter type='Click'></ClickCounter>
      //   <HoverCounter></HoverCounter> */}
      // </div>
      // ===================================================UserContext=========================
      // <div><UserContext.Provider value={'Manpreet'}>
      //   <ChannelContext.Provider value={'Test Channel'}>
      //     <Test1></Test1>
      //   </ChannelContext.Provider>
      // </UserContext.Provider></div>
    );
  }
}

export default App;
