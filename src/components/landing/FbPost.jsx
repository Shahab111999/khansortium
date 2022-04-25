import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import { FaCommentAlt, FaFacebook } from 'react-icons/fa';
import { RiShareForwardFill } from 'react-icons/ri';
import profilePic from '../../assets/pageprofile.jpeg'


const FbPost = ({ width, height, src }) => {
    const { full_picture, created_time, permalink_url, from, actions, picture } = src
    const date = new Date(created_time).toDateString()
    return (
        // <iframe src={src} width={width} height={height} style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <a href={permalink_url} className='fb_post' style={{ width, height, backgroundImage: `url(${full_picture})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
            <div className='post_headings' >
                <img src={profilePic} style={{ objectFit: 'cover' }} className='profile_pic' alt='profile' />   {/* <img src="" alt="" /> */}
                <div className='page_name'>
                    <h2>{from.name}</h2>
                    <small>{date}</small>
                </div>
                <FaFacebook color='#fff' size={30} style={{ position: "absolute", top: "12px", right: '12px' }} />
            </div>
            <div className='post_actions' >
                {
                    actions.map((action, index) => {
                        return (
                            <a href={action.link} key={index} className="single_action">
                                {action.name === 'Like' ? <AiFillLike color='#fff' size={18} /> : action.name === "Comment" ? <FaCommentAlt style={{ transform: "translateY(2px)" }} size={14} color='#fff' /> : <RiShareForwardFill style={{ transform: 'translateY(2px)' }} size={20} color='#fff' />}
                                <a style={{ marginLeft: '4px' }} href={action.link}>{action.name}</a>
                            </a>
                        )
                    })
                }
            </div>
        </a>

    )
}

export default FbPost
