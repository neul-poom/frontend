import Header from './Header.js'
import Footer from './Footer.js'
import React from 'react'

function Layout(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: '3 0 55px'}}>
                <Header/>
            </div>
            <div style={{ flex: '6 0 auto'}}>
                {props.children}
            </div>
            <div style={{ flex: '1 0 41px'}}>
                <Footer/>
            </div>
        </div>
    )
}


export default Layout;