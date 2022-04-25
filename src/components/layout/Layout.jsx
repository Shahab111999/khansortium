import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import './styles.css'

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
                {children}
            <Footer/>
        </>
    )
}

export default Layout
