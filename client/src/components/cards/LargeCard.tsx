import { Job } from "../../models/model"
import RoundButton from "./Reportbtn"
import './css/largecard.css'
import { Logos } from "./logos"

interface details {
    some: Job
}

export const LargeCard = (props: details) => {
    const logos = {
        logo_url: props.some.company.iconUrl,
        company_name: props.some.companyName,
        website: props.some.applicationUrl,
        rating: props.some.company.rating
    }

    return (
        <>
            <div className="largecontain">
                <div className="topconatiner">
                    <div className="companyname">
                        <Logos logos={logos} />
                        <p className="job_name">{props.some.jobTitle}</p>
                        <p className="location">{props.some.location}</p>
                    </div>
                    <div className="apply">
                        <div>
                            <RoundButton />
                        </div>
                        <div className="easyapply">
                            <a href={props.some.applicationUrl}>
                                <button className="easbtn">
                                    <span>
                                        <svg width="13" height="18" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M.049 11.945 8.69.104c.16-.219.505-.063.446.2l-1.678 7.64h5.008a.25.25 0 0 1 .203.397l-8.642 11.84c-.16.219-.505.064-.447-.2l1.678-7.638H.25a.25.25 0 0 1-.201-.398Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    {props.some.easyApply ? "Easy Apply" : "Apply Now"}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="des">Description</p>
                <div className="descrip" dangerouslySetInnerHTML={{ __html: props.some.description }} />
                <hr />
                <div className="basepay">
                    <h2>Base pay range</h2>
                    <div className="sal">
                        <p><span>₹10T - ₹30T</span>/mo (Employer est.)</p>
                        <p>₹20T/mo Median</p>
                        <p>{props.some.location}</p>
                    </div>
                    <div className="inf">
                        <div className="inficon">
                            <span>ⓘ</span></div>
                        <div className="infcnt">
                            <p>If an employer includes a salary or salary range on their jobs <span className="infnoinles">
                            , we display it as an "Employer Estimate". If a job has no salary data, Glassdoor displays a "Glassdoor Estimate" if available. To learn more about "Glassdoor Estimates," see our FAQ page.
                                </span> </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="lastdiv">
                    <div className="easyapply">
                        <a href={props.some.applicationUrl}>
                            <center>
                            <button className="easbtn desiphn">
                                {props.some.easyApply ? "Easy Apply" : "Apply Now"}
                            </button></center>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
