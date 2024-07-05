import React from "react";
import { Job, api } from "../../models/model";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/smallCard.css';
import { Logos } from "./logos";

interface Details {
    content: Job;
}

export const SmallCards: React.FC<Details> = (props: Details) => {

    const pastDate: Date = new Date(props.content.published);
    const currentDate = new Date();
    const diffDays = currentDate.getDate() - pastDate.getDate();
    const days = diffDays < 0 ? diffDays + 30 : diffDays;

    const logos = {
        logo_url: props.content.company.iconUrl,
        company_name: props.content.companyName,
        website: props.content.applicationUrl,
        rating: props.content.company.rating
    };

    const handleBookmarkClick = async () => {
        try {
            const response = await fetch(`${api}users/addbookmark`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobId: props.content.jobId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);

            toast.success('success!');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);

            toast.error('Failed to add bookmark');
        }
    };

    return (
        <>
            <div className="topsmall">
                <Logos logos={logos} />
                <div className="bookmarkcnt">
                    <button className="bookmark bookmarked" onClick={handleBookmarkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#4DD783" d="M2.595 23.997a.659.659 0 0 1-.425-.21.643.643 0 0 1-.17-.437V6.51C2 5.685 2.694 5 3.531 5H14.47c.836 0 1.53.685 1.53 1.511V23.35a.642.642 0 0 1-.352.575.663.663 0 0 1-.68-.043L9 19.823l-5.968 4.06a.663.663 0 0 1-.437.115Z"></path><path fill="#000" fillRule="evenodd" d="M19 21.315V3.591C19 2.72 18.306 2 17.469 2H6.53C5.694 2 5 2.721 5 3.59v17.725c0 .17.06.335.17.461a.638.638 0 0 0 .862.1L12 17.601l5.968 4.275a.64.64 0 0 0 .938-.206.703.703 0 0 0 .094-.355ZM6.5 19.696l4.627-3.314a1.5 1.5 0 0 1 1.746 0l4.627 3.314V3.591a.117.117 0 0 0-.043-.091H6.543a.117.117 0 0 0-.043.09v16.106Z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <p className="jobti">{props.content.jobTitle}</p>
            <p className="jobloc">{props.content.location}</p>
            <p className="jonloc">{props.content.hasRemote}</p>
            <p className="jobsa">{props.content.clearanceRequired}</p>
            <div className="smalllast">
                {props.content.easyApply ? (
                    <a href={props.content.applicationUrl}>
                        <button className="smallbnt">
                            <svg width="13" height="15" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.049 11.945 8.69.104c.16-.219.505-.063.446.2l-1.678 7.64h5.008a.25.25 0 0 1 .203.397l-8.642 11.84c-.16.219-.505.064-.447-.2l1.678-7.638H.25a.25.25 0 0 1-.201-.398Z" fill="currentColor"></path></svg>
                            <span className="esytxt">Easy Apply</span>
                        </button>
                    </a>
                ) : (
                    <div className="placeholder" />
                )}
                <p className="publi">{days}d</p>
            </div>

            <ToastContainer />
        </>
    );
}
