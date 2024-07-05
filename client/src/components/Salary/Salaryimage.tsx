import { FaSearch } from 'react-icons/fa';
import './css/salaryimage.css';
export const Salaryimage = () => {
  return (
<>
    <div>
        <img className='salimg' src="https://media.glassdoor.com/home/hero.jpg" />
        <p className='saltxt'><a href="https://www.glassdoor.co.uk/blog/lp/fishbowl/"><span className='salnew'>NEW!</span></a> Dive into anonymous, candid conversations with a community of professionals like you. <a href="https://www.glassdoor.co.uk/blog/lp/fishbowl/"><span className='salfi'>Fishbowl by Glassdoor</span> </a></p>
        <div className='saltxtdiv'>
            <h2 className='salhe'>Search Salaries and </h2>
            <p className='salhe'>Compensation</p>
            <div className='salnavdiv'>
                <button className='salbtn'>jobs</button>
                <button className='salbtn'>Companies</button>
                <button className='salbtn'>Salaries</button>
                <button className='salbtn'>Interviews</button>

            </div>
            <div>
                <input className='inpu1' type="text" placeholder='Job Title or Company'/>
                <input className='inpu2' type="text" placeholder='Location'/>
                <button className='inpu3'><FaSearch className="icon" /></button>
            </div>
        </div>
    </div>
    <div className='salscore'>
        <div className='flexdivi'>
            <div className='inlinediv'>
                <h1 className='evendiv'>Even the Score</h1>
                <p className='saleventxt'>Whether you’re starting a job search or ready for a promotion, use Glassdoor to uncover what other professionals like you are getting paid – so you can negotiate with confidence.</p>
                <a href="https://www.glassdoor.co.in/Salaries/know-your-worth.htm"><button className='dissal'>Discover Salaries</button></a>
            </div>
            <a href="https://www.glassdoor.co.in/Salaries/know-your-worth.htm">
            <img className='salchart' src="https://media.glassdoor.com/home/value-prop/sal/value-prop-carousel-desk-GB.png" alt="" />
            </a>
        </div>

    </div>
    <div className='greydiv'>
        <p className='bloghe'>What's New at Glassdoor</p>
        <div className='blockcards'>
        <div className='blockcard'>
            <a href="https://www.glassdoor.com/blog/new-job-offer-negotiate-current-salary/">
            <img className='blogimgs' src="https://blog-consumer.glassdoor.com/site-us/wp-content/uploads/sites/2/2023_How-to-Use-a-New-Job-Offer-to-Re-Negotiate-Your-Current-Salary_02_1523x988.png" alt="" /></a>
        <div className='padsal'>
        <h3>How to Use a New Job Offer to Re-Negotiate Your Current Salary</h3>
        <p className='blotxt'>Should you decide that leveraging an external opportunity is the route you want to take, here are some “Dos and Don’ts” to keep in mind when stepping into these kinds of negotiation talks.</p>
        <a href="https://www.glassdoor.com/blog/new-job-offer-negotiate-current-salary/">

        <button className='readblog but1'>Read the Blog</button></a>
        </div>
        </div>
        <div className='blockcard'>
            <a href="https://www.glassdoor.com/blog/what-to-do-pay-gap/">
        <img className='blogimgs' src="https://blog-consumer.glassdoor.com/site-us/wp-content/uploads/sites/2/GettyImages-683780844.jpg" alt="" /></a>
        <div className='padsal'>
        <h3>What to Do About a Pay Gap at Your Workplace</h3>
        <p className='blotxt'>Have you found out that you are earning a lower salary than someone who is a more recent hire, or has less experience than you? If so, it may be time to look for ways to do something about it.</p>
        <a href="https://www.glassdoor.com/blog/what-to-do-pay-gap/">
        
        <button className='readblog but1'>Read the Blog</button></a>
        
        </div>
        </div>
        <div className='blockcard'>
            <a href="https://www.glassdoor.com/blog/5-ways-to-know-if-youre-making-less-than-your-coworkers/">
            <img className='blogimgs' src="https://blog-consumer.glassdoor.com/site-us/wp-content/uploads/sites/2/thompsonhomonnay_glassdoor_27.jpg?w=1024&h=683&crop=0" /></a>
        <div className='padsal'>
        <h3>5 Ways to Know If You’re Making Less Than Your Coworkers</h3>
        <p className='blotxt'>Knowing where you stand in terms of compensation compared to your coworkers can help you understand your value to the company, whether or not it’s time to ask for a raise, and if you should potentially be looking for a new gig.</p>
        <a href="https://www.glassdoor.com/blog/5-ways-to-know-if-youre-making-less-than-your-coworkers/">
        
        <button className='readblog '>Read the Blog</button></a>
        
        </div>
        </div>
        </div>


    </div>
</>
)
}
