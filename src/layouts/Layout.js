import Header from './Header.js'
import Footer from './Footer.js'
import React from 'react'

function Layout(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Header/>
            </div>
            <div style={{ flex: '1 0 auto', overflow: 'auto', paddingTop: '55px'}}>
                {props.children}
            </div>
            <div style={{ position: 'sticky', bottom: 0, zIndex: 1 }}>
                <Footer/>
            </div>
        </div>
    )
}


export default Layout;