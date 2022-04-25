import React from 'react';
import { FacebookProvider, Feed } from 'react-facebook';
 
const FacebookPosts =()=> {
  
    return (
      <FacebookProvider appId="389145586144184">
        <Feed link="">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      </FacebookProvider>    
    );
  }


export default  FacebookPosts