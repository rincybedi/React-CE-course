import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../../App';
function Test1() {
  const user = useContext(UserContext);
  const channelName = useContext(ChannelContext);
  return (
    <div>
      {/* <UserContext.Consumer>
        {(userName) => {
          return (
            <ChannelContext.Consumer>
              {(channelName) => {
                return (
                  <div>
                    User Context Value : {userName}, Channel context value :
                    {channelName}
                  </div>
                ); 
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer> */}
      User Context Value : {user}, Channel context value :{channelName}
    </div>
  );
}

export default Test1;
