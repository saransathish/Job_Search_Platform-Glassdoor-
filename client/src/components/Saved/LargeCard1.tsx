import { Job } from "../../models/model"
import { Logos } from "../cards/logos"

interface details{
    some:Job
}

export const LargeCard1 = (props:details) => {
const logos = {
  logo_url:props.some.company.iconUrl,
  company_name:props.some.companyName,
  website:props.some.applicationUrl,
  rating:props.some.company.rating

}

  return (
    <>
    <div className="largecontain largecontain1">

      <div className="topconatiner">
        <div className="companyname">
          <Logos logos = {logos}/>
          <p className="job_name">{props.some.jobTitle}</p>
          <p className="location">{props.some.location}</p>
          </div>
        <div className="apply">
          <div className="easyapply">
          <a href={props.some.applicationUrl}>
          <button className="easbtn edit">
            Apply Now</button>
          </a>
          </div>

          <div className="easyapply">
          <button className="easbtn remo">
            Remove</button>
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
      <p>If an employer includes a salary or salary range on their job, we display it as an "Employer Estimate". If a job has no salary data, Glassdoor displays a "Glassdoor Estimate" if available. To learn more about "Glassdoor Estimates," see our FAQ page.</p>

        </div>
      </div>
    </div>
    <hr />
    
    </div></>
  )
}
