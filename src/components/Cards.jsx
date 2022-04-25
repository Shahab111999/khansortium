import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import './Cards.css'

const Cards = ({cardsContent,filterList,heading,active}) => {
       let {Id} =useParams()
       const [chevron,setChevron] = useState('fa fa-chevron-down')
       let filterContainer = useRef()
      useEffect(()=>{
          let listItems = document.querySelectorAll('.filters ul li')
          listItems[0].classList.add('active')
          let filtered = document.querySelectorAll("#Telecommunication")
          let crds =   document.querySelectorAll('.CARD')
          crds.forEach(crd=>crd.classList.remove('active'))
         filtered.forEach(item=>item.classList.add('active'))
      },[])

       useEffect(()=>{
           let listItems = document.querySelectorAll('.filters ul li')
           if(active){
           if(Id){ 
           listItems.forEach(item=> item.classList.contains('active') && item.classList.remove('active'))
           listItems.forEach(item=> item.getAttribute('data-text') === Id && item.classList.add('active'))
           let filtered = document.querySelectorAll("#"+ Id)
           let crds =   document.querySelectorAll('.CARD')
           Id === 'All' ?    crds.forEach(crd=>crd.classList.contains('active') ||crd.classList.add('active')) :crds.forEach(crd=>crd.classList.remove('active'))
          filtered.forEach(item=>item.classList.add('active'))
}}
       },[Id])


    const handleFilter =(e)=>{
           let listItems = document.querySelectorAll('.filters ul li')
           listItems.forEach(item=> item.classList.contains('active') && item.classList.remove('active'))
           e.target.classList.add('active')
           let text = e.target.getAttribute('data-text')
           let filtered = document.querySelectorAll("#"+ text)
           let crds =   document.querySelectorAll('.CARD')
           text === 'All' ?    crds.forEach(crd=>crd.classList.contains('active') ||crd.classList.add('active')) :crds.forEach(crd=>crd.classList.remove('active'))
          filtered.forEach(item=>item.classList.add('active'))
        }
        const openFilters =()=>{
            filterContainer.current.classList.toggle('active')
            if(chevron === 'fa fa-chevron-down'){
                setChevron('fa fa-chevron-up')
            }else{
                setChevron('fa fa-chevron-down')
            }
        }
    return (
        <div className="CARDS">
        <div className='CARDS_CONTAINER'>
             <h2>{heading}</h2>
             <div ref={filterContainer} className="filters">
                 <span onClick={openFilters}>Filters <i className={chevron}></i></span>
                 <ul>
                    
                     {
                         filterList.map(item=> <li onClick={handleFilter} data-text={item.filterId}>{item.label}</li>)
                        }
                    <li  onClick={handleFilter} data-text='All'>All Companies</li>
                 
                 </ul>
             </div>
            {cardsContent.map(card=><Card card={card}/>)}
        </div>
        </div>
    )
}

export default Cards
