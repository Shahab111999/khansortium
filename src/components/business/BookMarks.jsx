import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const BookMarks = () => {
     const firstMark = useRef()
     const secondMark = useRef()
     const thirdMark = useRef()
   
   
    useEffect(()=>{
        const handleScroll =()=>{
            let firstSection = window.innerHeight -100;
            let secondSection = window.innerHeight * 2  -150
            // let thirdSection = window.innerHeight * 3  -50
            // let fourthSection = window.innerHeight * 4  -100
            // let fifthSection = window.innerHeight * 5 -100
            let y = window.scrollY
            let first = document.getElementById('businessfirstmark')
            let second = document.getElementById('businesssecondmark')
            // let marks = [firstMark.current,secondMark.current ,thirdMark.current ,fourthMark.current,fifthMark.current]
            let marks = [first,second]
            marks.forEach(mark=>mark.querySelector('span').classList.remove('active'))
            
            switch(true){
                case   y <= firstSection && y > firstSection ==false:
                    first.querySelector('span').classList.add('active')
                   break;
                case   y <= secondSection && y > secondSection ==false :
                    second.querySelector('span').classList.add('active')
                   break;
                /* case   y <= thirdSection && y > thirdSection ==false:
                    thirdMark.current.querySelector('span').classList.add('active')
                   break; */
                // case   y <= fourthSection && y > fourthSection ==false:
                //     fourthMark.current.querySelector('span').classList.add('active')
                //    break;
                // case   y <= fifthSection && y > fifthSection ==false:
                //     fifthMark.current.querySelector('span').classList.add('active')
                //    break;

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
                <li  id='businessfirstmark' ref={firstMark} /* onClick={scrollDown} */>
                    <Link to='business'>
                        <span className='active'>Overview</span>
                    </Link>
                   
                </li>
              
                <li  id='businesssecondmark' ref={secondMark} /* onClick={scrollDown} */>
                    <a href="#Vertical_Cards" >
                        <span>Verticals</span>
                    </a>
                </li>
               
            </ul>
        </div>
    )
}

export default BookMarks
