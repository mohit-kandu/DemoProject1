import React from 'react'
import './css/style.min.css';
import "./App.css"
import { Navbar, ShowCase, Company, Boxes, Service } from './components'

export default function App() {
    return (
        <>
            <div className="svg-bg">
                <div></div>
                <Navbar />
                <ShowCase />
            </div>
            <Company />
            <Service />
            <Boxes />
        </>
    )
}

