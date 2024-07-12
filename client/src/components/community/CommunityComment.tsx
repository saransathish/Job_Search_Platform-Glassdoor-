import React, { useEffect, useState } from 'react';
import './css/comdiv.css';
import { api, Users } from '../../models/model';
import profileimage from './images/profileimage.jpg'
export interface CommentProps {
    comment: {
        commentId: string;
        communityId: string;
        commentContent: string;
        userId: string;
        postedAt: string;
    }
}
export const CommunityComment: React.FC<CommentProps> = (props) => {
    const [user, setUser] = useState<Users | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${api}users/getUsersDataById`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: props.comment.userId }),
                });

                if (response.ok) {
                    const userData: Users = await response.json();
                    setUser(userData);
                } else {
                    console.error('Error fetching user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [props.comment.userId]);

    function Days(date: string) {
        const pastDate: Date = new Date(date);
        const currentDate = new Date();
        const diffDays = currentDate.getDate() - pastDate.getDate();
        const days = diffDays < 0 ? diffDays + 30 : diffDays;
        return days;
    }

    return (
        <>
            <div className="comdiv">
                <div className='comhes'>
                    <div className='comcommenthea'>
                        <img className='comusericon' src={user?.image || profileimage} alt="" />
                        <div className='comcommenthea1'>
                            <p className='comcomuserti'>{user?.username || 'Loading...'}</p>
                            <p className='comcomuserti1'>{user?.preferredJobPosition || ''}</p>
                        </div>
                    </div>
                    <p className='pubtim'>{Days(props.comment.postedAt)}d</p>
                </div>
                <p className='comcontentmain'>{props.comment.commentContent}</p>
            </div>
        </>
    );
};
