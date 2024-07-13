import { Company } from '../../models/model'
import './css/companycard.css'
interface companys{
    companys :Company
}

export const CompanyCard = (props:companys) => {
  return (
    <>
    <div className='body'>
    <div className="company-card">
        <div className="header">
            <img src={props.companys.iconUrl} alt="Company Logo" />
            <div className="company-info">
                <p className="company-name">{props.companys.companyName}</p>
                <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>{props.companys.rating }  ★</span>
                </div>
            </div>

            <div className="stats">
                <div className="detailstats">
                    <center><strong>1.8L</strong></center>
                    <center><p className='cntdel'>Reviews</p></center>
                </div>
                <div className="detailstats">
                <center><strong>94.6t</strong></center>

                   <center><p className='cntdel'>Salaries</p></center> 
                </div>
                <div className="detailstats">
                <center><strong>80.9T</strong></center>
                <center><p className='cntdel'>Jobs</p></center>
                    
                </div>
            </div>
        </div>
        <div className="details">
            <div className="detail detail1">
                <strong>Location</strong>
                {props.companys.location}
            </div>
            <div className="detail">
                <strong>Global Company Size</strong>
                {props.companys.companySize}+ Employees
            </div>
            <div className="detail displaynone2">
                <strong>Industry</strong>
                {props.companys.industry}
            </div>
        </div>
        <div className="detail displaynone1">
                <strong>Industry</strong>
                {props.companys.industry}
            </div>
        <div>
            <strong>Description</strong>
            <p className="description">{props.companys.description}...</p>
        </div>
    </div>
    </div>
    </>
  )
}
