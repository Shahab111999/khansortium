import React from 'react'

const NavDropDownMenu = ({set,children}) => {
    
    const handleMouseOut= ()=>{
        set(false)
    }
    return (
        <div  className='NavDropDownMenu'>
           <span onMouseOut={handleMouseOut} className='ddLayer'></span>
            {children}
        </div>
    )
}

export default NavDropDownMenu
