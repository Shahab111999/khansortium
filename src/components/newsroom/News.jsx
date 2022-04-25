import React from 'react'
import news_banner from '../../assets/cricket_banner.jpeg'
import './styles.css'
import img1 from '../../assets/blog/blog1/1.jpeg'
import img2 from '../../assets/blog/blog1/2.jpeg'
import img3 from '../../assets/blog/blog1/3.jpeg'
import img4 from '../../assets/blog/blog1/4.jpeg'
import img5 from '../../assets/blog/blog1/5.jpeg'
import img6 from '../../assets/blog/blog1/6.jpeg'
import img7 from '../../assets/blog/blog1/7.jpeg'
import img8 from '../../assets/blog/blog1/8.jpeg'
import herald from '../../assets/logos/herald.jpeg'

const News = () => {
    return (
        <section>
            <div className="news_banner">
                <img src={news_banner} alt="" />
            </div>
            <div className="news_banner">
                <img src={news_banner} alt="" />
            </div>
            <div className="news_container">
                <h1 className="news_heading">
                     Making Cricket Mainstream in America
                </h1>
                <span className="news_sub_heading">
                    15 October 2021
                </span>
                <span className='source_text'>Inspired By  <a href='https://www.dailyherald.com/submitted/20211011/all-stars-team-takes-championship-at-1st-chicago-open-t20-night-cricket-tournament-2021' target='_blank'><img src={herald} alt="" /></a></span>
                <div className="news_text">
                    <p>
                    In the history of Chicago-area cricket, there have been numerous famous moments. The 1st Chicago Open T20 Night Cricket Tournament 2021, one of the best cricket events, was completed in the Chicago suburbs on Saturday, Oct. 9, with hundreds of people assembled for the thrilling final game.
                    </p>
                    <br />
                    <p>
                    Many local organizations play cricket, but the Chicago Open T20 Night Cricket Tournament, organized by notable community members Adeel Salam, Aijaz Baig, Sunny Khan, and Waseem Khan, is one of the best and most popular. The Chicago Open T20 Night Cricket Tournament features a variety of excellent players. Nadeem khan, Naveed Ahmed, and Dr. Naqi Haider represent Barrington Crescent Cricket Club were invited as chief guests in the recently organized tournament.

                    </p>
                </div>

                
                <div className="news_img_grid_container">
                   <div className="news_img_grid">
                       <img src={img1} alt="" />
                   </div>
                   <div className="news_img_grid">
                       <img src={img2} alt="" />
                   </div>
                   <div className="news_img_grid">
                       <img src={img3} alt="" />
                   </div>
                   <div className="news_img_grid">
                       <img src={img4} alt="" />
                   </div>
                </div>
                <div className="news_text">
                    <p>
                    The games followed government regulations and COVID safety guidelines. According to Aijaz Baig, this year was incredibly challenging because all of the games went very well, but "All of our priorities were to ensure the city and state government restrictions (were) in place to keep the community and players safe from COVID-19."
                    </p><br />
                    <p>
                        
In this 20/20 cricket tournament, 14 teams competed, with local and out-of-state players representing each team. The tournament adhered to the International Cricket Council League rules. The tournament took place between the first and second weeks of August 2021 and the second week of October 2021. A one-minute silence was observed in memory of those who died as a result of Covid-19.

                    </p>
                    <br />
                    <p>
                    This tournament featured the 14 best Chicago area teams with top players, bringing together multiple local communities to cheer on their favorite players and teams.
                    </p><br />
                    <p>
                    All-Stars Team won the final of the Chicago T20 tournament against Thunder Billas. The final match was at the Camera Park Stadium in Glendale Heights, Illinois. Thunder Billas won the toss and opted to field first. The All-Stars team scored 142 runs in total. Despite playing long innings, the Thunder Billas were unable to match the score. In 18.4 overs, they were all out for 121 runs.
                    </p>
                </div>
                <div className="news_img_grid_container">
                    <div className="news_img_grid_full_width">
                        <img src={img8} alt="" />
                    </div>
                </div>
                <div className="news_text_img_right">
                    <div className="news_text_half">
                        <p>
                        On the final game night, the All-Stars Team set a 142-run target, and batsman Ankush Agarwal was named Final MVP after scoring 38 runs and taking three wickets while allowing only 10 runs in 3.4 overs. Top scorers included Manu Singh, Hamad Qureshi, and Ankush Agarwal.
                        </p>
                        <br />
                        <p>
                        "Throughout the past several months, our organizing team worked hard to develop and implement robust COVID protocols to enable players to safely play in a Chicago area of this size and scale," Adeel Salam and Aijaz Baig said in an interview. The main goal is to organize this tournament as well as promote cricket to bring out local talent.
                        </p><br />
                        <p>
                        According to Sunny Khan, the Chicago T-20 Tournament provided excellent playing opportunities for young cricketers.
                        </p>
                    </div>
                    <div className="news_img_half">
                        <img src={img5} alt="" />
                    </div>

                </div>
                <div className="news_text_img_left">
                    <div className="news_text_half">
                        <p>
                        The Chief guests Nadeem khan, Naveed Ahmed, and Dr. Naqi  Haider presented awards to the sponsors and supporters during the award ceremony, including a runner-up trophy and cash prizes of $1,300, as well as the check of $2500 for the winning team. Captain Nishat of the All-Star team accepted the trophy and checks.
                        </p><br />
                        <p>
                        American Cricket Conference, Barrington Crescent Cricket Club, Kotli Lions of Kashmir Premier League, Rising Stars Cricket Club, Whole-Cell Accessories, Crescent Financial Services, MI Travel, Mudassir Siddiqui Real Estate Broker, Dr. Naqi Haider, Sunil Shah, and many others sponsored the T20 night tournament.
                        </p>
                    </div>
                    <div className="news_img_half">
                        <img src={img7} alt="" />
                    </div>

                </div>
                {/* <div className="news_text">
                    <p className='text_lg'>Same Covered By <a href='https://www.dailyherald.com/submitted/20211011/all-stars-team-takes-championship-at-1st-chicago-open-t20-night-cricket-tournament-2021'><em>
                        Heralds
                    </em>
                    </a>
                    </p>
                </div> */}
            </div>
        </section>
    )
}

export default News
