import React from 'react'
import company_1 from "../assets/img/company_logo/1.svg"
import company_2 from "../assets/img/company_logo/2.svg"
import company_3 from "../assets/img/company_logo/3.svg"
import company_4 from "../assets/img/company_logo/4.svg"
import company_5 from "../assets/img/company_logo/5.svg"
import company_6 from "../assets/img/company_logo/6.svg"
import company_7 from "../assets/img/company_logo/7.svg"
import company_8 from "../assets/img/company_logo/8.svg"
import company_9 from "../assets/img/company_logo/9.svg"
import rect1 from "../assets/img/bgSVG/Rectangle1.png"
import rect2 from "../assets/img/bgSVG/Rectangle2.png"

export default function Company() {
    const [companyData, setCompanyData] = React.useState([])
    let count = 0
    let companyLogo = [company_1, company_2, company_3, company_4, company_5, company_6, company_7, company_8, company_9]

    React.useEffect(() => {
        const fetchData = async () => {
            fetch('http://ec2-3-14-143-28.us-east-2.compute.amazonaws.com:8080/common/companyReviews')
                .then(resp => resp.json())
                .then(value => setCompanyData(value.model))
        }
        fetchData()
    }, [])
    return (
        <div className="p-5 position-relative ">
            <div className="container ">
                <h1 className="fw-bold text-center text-dark m-5">
                    Something for everyone
                </h1>
                <div className="row g-5 text-black mt-5  position-relative">
                    <div className="position-absolute">
                    </div>
                    {companyData.map(item => {
                        count += 1
                        return <div className="col-md-6 col-lg-4  ">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="custom-border-bottom">
                                        <img className="rounded-circle position-relative sit-in-middle" src={companyLogo[count]} alt="" />
                                    </div>
                                    <h3 className="card-title mt-5 mb-3 text-dark">{item.companyName}</h3>
                                    <p className="card-text lh-1 fs-fs-6 text-light">{item.review}</p>
                                    <button className="align-self-center btn btn-dark bg-primary py-3 custom-px position-relative sit-in-middle">Start Free Trial</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}