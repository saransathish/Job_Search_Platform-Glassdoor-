import { BowlList } from "./BowlList"

export const Communityleft = () => {
  return (
    <div className="postcont">
                    <button className='postbtn'>
                        <span className='plus'>+</span>
                        <span className='post'>Post</span>
                    </button>
                    <h2>My Bowls</h2>
                    <BowlList bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/PBYuAWuTvXP9f.jpg', name: 'PwC IAC', bowllink: 'https://www.glassdoor.co.in/Community/pwc-iac' }} />
                    <BowlList bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/035wYdyAZ9nWH.jpg', name: 'HiringInfo', bowllink: 'https://www.glassdoor.co.in/Community/hiringinfo' }} />
                    <BowlList bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/QywPmODvg7UDX.jpg', name: 'Management Consulting', bowllink: 'https://www.glassdoor.co.in/Community/management-consulting-2' }} />
                    <a href="https://www.glassdoor.co.in/Community/search/bowls">
                        <button className='expbtn'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12.5-4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#000"></path>
                            </svg>
                            <span className='exptxt'></span>Explore Bowls
                        </button>
                    </a>
                </div>
  )
}
