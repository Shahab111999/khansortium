import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const BookMarks = () => {
     const firstMark = useRef()
     const secondMark = useRef()
     const thirdMark = useRef()
   
   
    useEffect(()=>{
        const handleScroll =()=>{
            let firstSection = window.innerHeight -100;
            let secondSection = window.innerHeight + 450
            let thirdSection = window.innerHeight * 2 +400  
            // let fourthSection = window.innerHeight * 4  -100
            // let fifthSection = window.innerHeight * 5 -100
            let y = window.scrollY

            let first = document.getElementById('communityfirstmark')
            let second = document.getElementById('communitysecondmark')
            let third = document.getElementById('communitythirdmark')
            // let marks = [firstMark.current,secondMark.current ,thirdMark.current ,fourthMark.current,fifthMark.current]
            let marks = [first,second,third]
            marks.forEach(mark=>mark.querySelector('span').classList.remove('active'))
            
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
                <li  id='communityfirstmark'ref={firstMark} /* onClick={scrollDown} */>
                    <Link to='community'>
                        <span className='active'>Initiatives</span>
                    </Link>
                    
                </li>
              
                <li  id='communitysecondmark'ref={secondMark} /* onClick={scrollDown} */>
                    <a href="#Hadith" >
                        <span>Hadith</span>
                    </a>
                </li>
                <li id='communitythirdmark' ref={thirdMark} /* onClick={scrollDown} */>
                    <a href="#Drives" >
                        <span>Drives</span>
                    </a>
                </li>
               
            </ul>
        </div>
    )
}

export default BookMarks
