import React, { useEffect, useRef, useState } from 'react'
import MobileDropDown from './MobileDropDown'
import NavDropDownMenu from './NavDropDownMenu'
import brandLogoLight from '../../assets/logoLight.png'
import brandLogoDark from '../../assets/logoLight.png'
import { NavLink, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Nav = () => {
    const [navImg, setNavImg] = useState(brandLogoLight)
    useEffect(() => {
        let nav = document.querySelector('nav')

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                if (
                    self.direction === -1 && window.scrollY > 100) { nav.classList.add('active'); setNavImg(brandLogoDark) } else { nav.classList.add('active'); setNavImg(brandLogoLight) }
            }
        });

    }, [])


    // const handleMouseDown = (e) => {
    //     let items = document.querySelectorAll('.navTextList .listItem')
    //     items.forEach(item => item.classList.contains('active') && item.classList.remove('active'))
    //     e.target.classList.add('active')
    // }
    const business = useRef(null)
    // const handleMouseLeave = () => {
    //     let items = document.querySelectorAll('.navTextList .listItem')
    //     items.forEach(item => item.classList.contains('active') && item.classList.remove('active'))
    //     business.current.classList.add('active')
    // }
    const [dropdownContent, setDropdownContent] = useState('Bhago')
    const [isHover, setIsHover] = useState(false)
    // const handleMouseOver = (content) => {
    //     setIsHover(true)
    //     setDropdownContent(content)
    // }
    let mobileNav = useRef(null)
    const openMobileNav = () => {
        mobileNav.current.classList.add('active')
    }
    const closeMobileNav = () => {
        mobileNav.current.classList.remove('active')
    }
    let businnessContent = (
        <>

            <div className='dropdownDivider'>
                <Link to='/business' style={{display:'block'}}>
                    <h3>Business Overview</h3>
                </Link>
                <Link to='/business'>
                    <span>Learn More</span>
                </Link>
            </div>
            {/* <div className='dropdownDivider'>
                <h3>Our Brands</h3>
                <span>Browse select Tata brands</span>
            </div> */}
            <div className='dropdownDivider'>
                <h3>
                    <Link to='/business#All'>
                        Business Verticals
                    </Link>
                </h3>
                <div className="dropdownLists">

                    <ul>
                        <li><Link to='/business#Telecommunication'> Telecommunication </Link> </li>
                        <li><Link to='/business#Entertainment'> Entertainment </Link></li>
                        <li><Link to='/business#RealEstate'> Real Estate </Link> </li>
                        <li><Link to='/business#Sports'> Sports </Link> </li>
                    </ul>
                    <ul>
                        <li><Link to='/business#StaffingAndTraining'> Staffing & Training </Link> </li>
                        <li><Link to='/business#EventVenue'> Event Venue </Link> </li>
                        <li><Link to='/business#Pharmaceutical'> Pharmaceutical </Link> </li>

                    </ul>
                    <ul>
                        <li><Link to='/business#SoftwareDevelopment'> Software Development <br /> & Media Marketing </Link> </li>
                        <li><Link to='/business#BusinessProcessOutsource'> Business Process Outsource </Link> </li>
                        <li><Link to='/business#All'> All Companies </Link> </li>
                    </ul>
                </div>
            </div>
        </>
    )
    let communityContent = (
        <>
            <div className='dropdownDivider'>
                <Link to='/community' style={{display:'block'}}>
                <h3>Community Overview</h3>
                </Link>
                <Link to='/community'>
                    <span>Learn More</span>
                </Link>
            </div>
            {/* <div className='dropdownDivider'>
                <h3>Our Brands</h3>
                <span>Browse select Tata brands</span>
            </div> */}
            <div className='dropdownDivider'>
                <h3>
                    <Link to='/community#Slide1'>
                        Our Drives
                    </Link>
                </h3>
                <div className="dropdownLists">

                    <ul>
                        <li><Link to='/community#Slide1'> Free Onsite Covid Testing </Link> </li>
                        <li><Link to='/community#Slide2'> Hayat Clinic Free Medical Services </Link></li>
                        <li><Link to='/community#Slide3'> Team Sponsors </Link> </li>
                    </ul>
                    <ul>
                        <li><Link to='/community#Slide4'> Disaster Relief </Link> </li>
                        <li><Link to='/community#Slide5'> Free Internet Packages at public places </Link> </li>


                    </ul>

                </div>
            </div>
        </>
    )
    let aboutContent = (
        <>
            <div className="dropdownDivider">

                <h3>The Tata Group</h3>
                <span>About The Tata Group</span>
                <div className="dropdownLists">
                    <ul><li>Tata Sons</li>
                        <li>Values and Purpose</li></ul>
                    <ul><li>Heritage</li>
                        <li>Leadership Team</li></ul>
                    <ul><li>Sponsorships</li>
                        <li>Innovation</li></ul>
                </div>
            </div>
            <div className="dropdownDivider">
                <h3>Investors</h3>
                <span>Investor Section</span>
                <div className="dropdownLists">

                    <ul>
                        <li>Companies</li>
                        <li>Stock Data</li>
                    </ul>
                    <ul>
                        <li>Business Verticals</li>
                    </ul>
                </div>
            </div>
        </>
    )
    let mobileBusinessContent = (
        <div className='mobileDropDown'>
            <div className="mobileDropDownDivider">
                <h3>Business overview</h3>
                <span>Learn More</span>
            </div>
            <div className="mobileDropDownDivider">
                <h3>Our Brands</h3>
                <span>
                    Browse select Tata brands

                </span>
            </div>
            <div className="mobileDropDownDivider">
                <h3>
                    Business Verticals
                </h3>
                <ul>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                    <li>Information Technology</li>
                </ul>
            </div>
        </div>
    )
    return (
        <>

            <nav className='active'>
                <div className="brandLogo">
                    <Link to="/">
                        <img src={navImg} alt="" />
                    </Link>

                </div>
                <ul className='navTextList'>
                    {/* <li className='listItem hideSmall '  onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown} ><NavLink  activeClassName='active'  to="/" exact>Home</NavLink> */}
                    {/* <NavDropDownMenu>
                       </NavDropDownMenu> */}

                    {/* </li> */}
                    <li id='business' ref={business} className='listItem  hideSmall'/*  onMouseOver={() => handleMouseOver(businnessContent)} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown} */><NavLink activeClassName='active' to="/business">Business</NavLink>
                        <div className="drop_down">
                            {businnessContent}
                        </div>
                    </li>
                    <li id='community' className='listItem hideSmall' /* onMouseOver={() => handleMouseOver(communityContent)} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown} */><NavLink activeClassName='active' to="/community">Community</NavLink>
                        <div className="drop_down">
                            {communityContent}
                        </div>
                    </li>
                    <div className="dropdownlayer"></div>
                    <li className='listItem hideSmall' /* onMouseOver={() => handleMouseOver(aboutContent)} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown} */><NavLink activeClassName='active' to="/about">About Us</NavLink></li>
                    <li className='listItem hideSmall' /* onMouseOver={() => handleMouseOver(aboutContent)} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown} */><NavLink activeClassName='active' to="/newsroom">Newsroom</NavLink></li>
                    <li className='listItem hideSmall' /* onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown} */><NavLink activeClassName='active' to="/careers">Careers</NavLink></li>
                </ul>
                <ul className='navIconList'>
                        <Link to='/contactus'>
                    <li className='listItem hideSmall' title='Contact Us'>
                            <i className="fa fa-envelope"></i>
                    </li>
                        </Link>

                        <Link to='/newsroom'>
                    <li className='listItem hideSmall' title='WorldWide'>

                            <i className="fa fa-globe"></i>
                    </li>
                        </Link>
                    {/* <li className='listItem' title='Search'>
                       
                        <i className="fa fa-search"></i>
                    
                    </li> */}
                    <li className='listItem hideLarge' onClick={openMobileNav} ><i className="fa fa-bars"></i></li>
                </ul>
            </nav>
            {/* {isHover &&
                <NavDropDownMenu set={setIsHover}>
                {dropdownContent}
                </NavDropDownMenu> */}

            <div ref={mobileNav} className="mobileNav">
                <ul>
                    <li className='mobileItem firstMobileItem'>Menu <i onClick={closeMobileNav} className="fa fa-times"></i></li>
                    <li className="mobileItem" onClick={e => e.target.classList.toggle('active')}><Link to='/business'>
                        Business
                    </Link>  {/* <i className="fa fa-chevron-right"></i> */}
                        {/* <MobileDropDown>
                            {mobileBusinessContent}
                        </MobileDropDown> */}
                    </li>
                    <li className="mobileItem" onClick={e => e.target.classList.toggle('active')}><Link to='/community'>Community</Link> {/* <i className="fa fa-chevron-right"></i> */}
                        {/* <MobileDropDown>
                            {mobileBusinessContent}
                        </MobileDropDown> */}

                    </li>
                    <li className="mobileItem" onClick={e => e.target.classList.toggle('active')}><Link to='/about'>About Us</Link> {/* <i className="fa fa-chevron-right"></i> */}
                        {/* <MobileDropDown>
                            {mobileBusinessContent}
                        </MobileDropDown> */}
                    </li>
                    <li className="mobileItem"><Link to='/newsroom'>Newsroom</Link></li>
                    <li className="mobileItem"> <Link to='/careers '>Careers</Link></li>
                    <li className="mobileItem"><Link to='/newroom'>WorldWide</Link></li>
                    <li className="mobileItem"><Link to='/contactus'>Contact Us</Link></li>
                </ul>
            </div>

        </>
    )
}

export default Nav
