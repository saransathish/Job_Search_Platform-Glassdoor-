import { Job } from "../../models/model"
import './css/savedjobs.css'
import { Logos1 } from "./logos1"
interface details{
    content :Job
}

export const SmallCards1 = (props:details) => {


  const logos = {
    logo_url:props.content.company.iconUrl,
    company_name:props.content.companyName,
    website:props.content.applicationUrl,
    rating:props.content.company.rating

  
  }
  return (
    <> 
    <div className="topsmall">
    <Logos1 logos = {logos}/>
    </div>
    <p className="jobti">{props.content.jobTitle}</p>
    <p className="jobloc">{props.content.location}</p>
    <p className ="jonloc">{props.content.hasRemote}</p>
    <p className="jobsa">{props.content.clearanceRequired}</p>
    <div className="smalllast">

    </div>
    </>
  )
}
