import InstagramEmbed from 'react-instagram-embed';
import React from 'react'
 
const InstagramFeed =()=>{
    return <InstagramEmbed
    url='https://www.instagram.com/gammavrwaltonave/'
    maxWidth={320}
    hideCaption={false}
    containerTagName='div'
    protocol=''
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
}

export default InstagramFeed

