import Header from './Header.js'
import Footer from './Footer.js'
import React from 'react'

function Layout(props) {
    return (
        <>
        <Header/>
            {props.children}
        <Footer/>
        </>
    )
}


export default Layout;