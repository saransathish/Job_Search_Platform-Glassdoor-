import { Bowls } from "../community/Bowls"

export const BowlProfile = () => {
  return (
    <div className="profile-main-right">
          <h2 className='profile-right-head'>Join in the conversation</h2>
          <p className='profile-right-headtxt'>Dive into a Bowl for real, anonymous talk with other professionals.</p>
          <div className='bowlleft'>
            <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/18SaaIiCOZhvc.jpg', name: 'Big 4 Discussions!', desc: 'Originally this was Made for confessions. This Bowl is now' }} />
            <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/7N3dbbQ9JjRLG.jpg', name: 'Pune Network', desc: "Physical and virtual group and 1:1 meetups for folks in Pune, India." }} />
            <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/cwwTrIKrzBNiO.jpg', name: 'Bangalore City', desc: "Useful Resources https://1drv.mssgfhhdb" }} />
            <Bowls bowl={{ icon: 'https://www.glassdoor.com/images/bowls/headers/default-grey.png', name: 'Referral and Opportunities', desc: 'This group provides referrals and job opportunities to' }} />
          </div>
        </div>
  )
}
