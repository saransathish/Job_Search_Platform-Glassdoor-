import { Bowls } from "./Bowls"

export const CommunityRight = () => {
  return (
    <div className="bowlcont">
                    <p className='bowmai'>Bowls™ for you</p>
                    <a href="https://www.glassdoor.co.in/Community/search/bowls">
                        <p className='explo'>Explore All Bowls </p>
                    </a>
                    <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/18SaaIiCOZhvc.jpg', name: 'Big 4 Discussions!', desc: 'Originally this was Made for confessions. This Bowl is now' }} />
                    <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/7N3dbbQ9JjRLG.jpg', name: 'Pune Network', desc: "Physical and virtual group and 1:1 meetups for folks in Pune, India." }} />
                    <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/cwwTrIKrzBNiO.jpg', name: 'Bangalore City', desc: "Useful Resources https://1drv.ms" }} />
                    <Bowls bowl={{ icon: 'https://www.glassdoor.com/images/bowls/headers/default-grey.png', name: 'Referral and Opportunities', desc: 'This group provide referral and job opportunities to' }} />
                </div>
  )
}
