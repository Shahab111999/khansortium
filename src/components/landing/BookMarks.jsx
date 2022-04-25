import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const BookMarks = () => {
     const firstMark = useRef()
     const secondMark = useRef()
     const thirdMark = useRef()
     const fourthMark = useRef()
     const fifthMark = useRef()
   
    useEffect(()=>{
        const handleScroll =()=>{
            let firstSection = window.innerHeight -100;
            let secondSection = window.innerHeight * 2  -100
            let thirdSection = window.innerHeight * 3  -100
            let fourthSection = window.innerHeight * 4  -100
            // let fifthSection = window.innerHeight * 5 -100
            let y = window.scrollY
            let first = document.getElementById('landingfirstmark')
            let second = document.getElementById('landingsecondmark')
            let third = document.getElementById('landingthirdmark')
            let fourth = document.getElementById('landingfourthmark')
            // let marks = [firstMark.current,secondMark.current,thirdMark.current,fourthMark.current,fifthMark.current]
            let marks = [first,second,third,fourth]
            marks?.forEach(mark=>mark?.querySelector('span').classList.remove('active'))
            
            switch(true){
                case   y <= firstSection && y > firstSection ==false:
                    first.querySelector('span').classList.add('active')
                   break;
                case   y <= secondSection && y > secondSection ==false :
                    second.querySelector('span').classList.add('active')
                   break;
                case   y <= thirdSection && y > thirdSection ==false:
                    third.querySelector('span').classList.add('active')
                   break;
                case   y <= fourthSection && y > fourthSection ==false:
                    fourth.querySelector('span').classList.add('active')
                   break;
              /*   case   y <= fifthSection && y > fifthSection ==false:
                    fifthMark?.current.querySelector('span').classList.add('active')
                   break; */

            }
             
            
        }
       window.addEventListener('scroll',handleScroll)
       return ()=> window.removeEventListener('scroll',handleScroll)
    },[])
   
    // const scrollDown = (e) => {
    //     document.querySelectorAll('.BookMarks ul li').forEach(li => li.classList.remove('active'))
    //     e.target.parentElement.parentElement.classList.add('active')

    // }
    return (
        <div className='BookMarks'>
            <ul>
                <li id='landingfirstmark' ref={firstMark} /* onClick={scrollDown} */>
                    <Link to='/'>
                        <span className='active'>Lead Stories</span>
                    </Link>
                   
                </li>
                <li id='landingsecondmark' ref={secondMark} /* onClick={scrollDown} */>
                    <a href="#Brands" >
                        <span>Companies</span>
                    </a>
                </li>
                <li id='landingthirdmark' ref={thirdMark} /* onClick={scrollDown} */>
                    <a href="#Mangement" >
                        <span>Management</span>
                    </a>
                </li>
                <li id='landingfourthmark' ref={fourthMark} /* onClick={scrollDown} */>
                    <a href="#News" >
                        <span>News</span>
                    </a>
                </li>
               {/*  <li style={{display:'none'}} ref={fifthMark} onClick={scrollDown}>
                    <a href="#Brands" >
                        <span>Brands</span>
                    </a>
                </li> */}
            </ul>
        </div>
    )
}

export default BookMarks
