import axios from 'axios'
import React, { lazy, Suspense, useEffect, useState } from 'react'
// import FbPost from './FbPost'
import facebook from '../../assets/socialicons/facebook.png';
import instagram from '../../assets/socialicons/instagram.png';
import linkedin from '../../assets/socialicons/linkedin.png';
import twitter from '../../assets/socialicons/twitter.png';
import logo from '../../assets/logoLight.png';

const FbPost = lazy(() => import('./FbPost'))
const SocialPosts = ({ bhaistatichnmeto }) => {

    let saadsf = window.innerWidth < 1140 ? window.innerWidth > 600 ? window.innerWidth / 5 * 3 : window.innerWidth : 1140
    let width = saadsf < 1200 ? saadsf < 900 ? saadsf < 600 ? saadsf - 50 : saadsf / 3 - 10 : saadsf / 3 - 10 : saadsf / 4 - 50

    const [height, setHeight] = useState(window.innerWidth <= 768 ? 220 : 280)
    const [data, setData] = useState([])
    const [gammaData, setGammaData] = useState([])
    /*   useEffect(()=>{
         axios.get(`https://graph.facebook.com/112441500397309/feed?limit=4&fields=permalink_url&access_token=${process.env.REACT_APP_API_KEY}`)
         .then(res=>  {
             let newData =[ ...data,...res.data.data]
             setData(newData)
         }
             )
         axios.get(`https://graph.facebook.com/110313754738269/feed?limit=4&fields=permalink_url&access_token=${process.env.REACT_APP_API_KEY}`)
         .then(res=> {
             let newData =[ ...data,...res.data.data]
             setGammaData(newData)
         }
             )
         
    //   },[]) */

    useEffect(() => {

        axios.get(`https://graph.facebook.com/v13.0/111918071264923/feed?access_token=${process.env.REACT_APP_KHANSORTIUM_KEY}&fields=permalink_url,id,full_picture,created_time,from,actions&limit=6`)
            .then(res => {
                let newData = res.data.data
                setData(newData.slice(0, 6))

            }
            )

    }, [])

    let posts = [
        `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgammavryc%2Fposts%2F125099453259699&show_text=true&width=${width}`,
        `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgammavryc%2Fposts%2F125070729929238&show_text=true&width=${width}`,
        `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgammavryc%2Fposts%2F125058656597112&show_text=true&width=${width}`,
        `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWholeCellBolingbrook%2Fposts%2F421848812789908&show_text=true&width=${width}`,
        `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWholeCellBolingbrook%2Fposts%2F421765792798210&show_text=true&width=${width}`,
        `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWholeCellBolingbrook%2Fposts%2F421731089468347&show_text=true&width=${width}`,


    ]

    if (bhaistatichnmeto) {
        posts = [
            ...posts,
            `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgammavryc%2Fposts%2F124855859950725&show_text=true&width=${width}`,
            `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgammavryc%2Fposts%2F124836776619300&show_text=true&width=${width}`,
            `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgammavryc%2Fposts%2F124814189954892&show_text=true&width=${width}`,
            `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWholeCellBolingbrook%2Fposts%2F421200056188117&show_text=true&width=${width}`,
            `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWholeCellBolingbrook%2Fposts%2F421145752860214&show_text=false&width=${width}`,
            `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWholeCellBolingbrook%2Fposts%2F421081989533257&show_text=true&width=${width}`
        ]
    }


    return (
        <div id='News' className='Social_Posts'>
            <img className='social_logo' src={logo} alt="" />
            <h2> Social Media Existance</h2>
            <div className="social_icons">
                <a target='_blank' href="https://www.facebook.com/Khansortium-111918071264923">
                    <img src={facebook} alt="" />
                </a>
                <a target='_blank' href="https://twitter.com/khansortium">
                    <img src={twitter} alt="" />
                </a>
                <a target='_blank' href="https://www.instagram.com/khansortium/">
                    <img src={instagram} alt="" />
                </a>
                <a target='_blank' href="https://www.linkedin.com/company/khansortium/about/?viewAsMember=true">
                    <img src={linkedin} alt="" />
                </a>
            </div>





            <div className="Social_Posts_Container">

                {
                    data?.map(post =>
                        <Suspense key={post.id} fallback={<div>Loading...</div>}>
                            <FbPost width={width} height={height} src={post} />

                        </Suspense>
                    )
                }
            </div>
        </div>
    )
}

export default SocialPosts