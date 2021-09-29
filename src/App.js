import React from 'react'
import './css/style.min.css';
import "./App.css"
import { Navbar, ShowCase, Company, Boxes, Service } from './components'

export default function App() {
    return (
        <>
            <div >
                <div className="svg-container">
                </div>
                <Navbar />
                <ShowCase />
            </div>
            <Company />
            <Service />
            <Boxes />
        </>
    )
}

