import React from 'react'
import showcase from "../assets/ShowCase.png"

export default function ShowCase() {
    return (
        <div className="bg-primary text-center text-sm-start custompb-5">
            <div className="container-fluid p-0 ">
                <div className="text-sm-start d-sm-flex align-items-center justify-content-center px-5 " >
                    <div className="ps-xl-5">
                        <h1 className="fw-bold display-1 w-75 lh-1">Delight your customers, from wherever you are </h1>
                        <p className="lead my-4 lh-1">Marketing, sales and service software that helps your business grow without compromise. because "good for the business" should also mean "good for the customer"
                        </p>
                        <button className="btn btn-dark btn-lg py-2 px-5 " data-bs-toggle="modal" data-bs-target="#registrationModal">Try for free</button>
                    </div>
                    <img className="img-fluid w-50 d-none flex-lg-column d-sm-block w-auto" src={showcase} alt="" />

                </div>
            </div>
        </div>
    )
}
