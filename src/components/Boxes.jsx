import React from 'react'

export default function Boxes() {
    const arr = [1, 2, 3]
    return (
        <>
            <div className="p-5">
                <section className="container">
                    <div className="row text-center g-4 text-dark">
                        {arr.map(item => {
                            return <div className="col-md">
                                <div className="card  bg-super-light custompb-1" >
                                    <div className="text-center">
                                        <div className="container custompb-4 bg-white position-relative">
                                            <h3 className="card-title fs-4 fw-bold position-relative sit-bottom-left">Company name</h3>
                                        </div>
                                        <p className="card-text lh-1 p-5 custompb-3 bg-super-light">The mega summit has everything you would expect in an event. The mega summit has everything you </p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </section>
                <section className="h1 bg-primary custom-py mx-auto custom-my text-center custom-border-radius-top w-75">
                    <h1 className="text-white fw-bold">What is new at the service Now</h1>
                </section>
            </div>
            <section>
                <div className="svg-container-bottom">
                </div>
                <div className="h1 container-fluid bg-dark custom-py mb-0 text-center custom-border-radius-bottom">
                    <h1 className="my-3 display-5 text-white fw-bold">Join successful small businesses and teams.</h1>
                    <p className="my-5 lead fs-3 text-white">Copper helps businesses grow one relationship at a time.</p>
                    <button className=" my-3 btn btn-dark border-1 border-white py-2 px-5">Try for free</button>
                </div>
            </section>
        </>
    )
}
