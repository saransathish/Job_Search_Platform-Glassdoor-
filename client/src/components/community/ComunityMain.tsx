// import React, { useEffect, useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import './css/communitymain.css';
// import './css/postcomp.css';
// import lo from './images/graduation.png';
// import share from './images/share.png';
// import comment from './images/chat.png';
// import { CommunityPost, api } from '../../models/model';
// import { CommunityRight } from './CommunityRight';
// import { Communityleft } from './Communityleft';

// export const ComunityMain: React.FC = () => {
//     const [posts, setPosts] = useState<CommunityPost[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [likedCommunityIds, setLikedCommunityIds] = useState<string[]>([]);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await fetch(`${api}community`);
//                 const data: CommunityPost[] = await response.json();
//                 setPosts(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching posts:', error);
//                 setLoading(false);
//             }
//         };

//         const fetchLikedCommunityIds = async () => {
//             try {
//                 const response = await fetch(`${api}community/userLikes`);
//                 const data: string[] = await response.json();
//                 setLikedCommunityIds(data);
//             } catch (error) {
//                 console.error('Error fetching liked community IDs:', error);
//             }
//         };

//         fetchPosts();
//         fetchLikedCommunityIds();
//     }, []);

//     const PostsComp: React.FC<{ post: CommunityPost }> = ({ post }) => {
//         const [likeCount, setLikeCount] = useState(post.likesCount);
//         const [liked, setLiked] = useState(likedCommunityIds.includes(post.communityId));

//         const toggleDisplay = async () => {
//             try {
//                 const response = await fetch(
//                     `${api}community/${liked ? 'removecommunitypost' : 'likecommunitypost'}`,
//                     {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({ communityId: post.communityId }),
//                     }
//                 );

//                 if (response.ok) {
//                     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//                     setLiked(!liked);
//                 } else {
//                     console.error('Error updating like status');
//                 }
//             } catch (error) {
//                 console.error('Error toggling like:', error);
//             }
//         };

//         const pastDate: Date = new Date(post.postedAt);
//         const currentDate = new Date();
//         const diffDays = currentDate.getDate() - pastDate.getDate();
//         const days = diffDays < 0 ? diffDays + 30 : diffDays;

//         return (
//             <div className="postmn">
//                 <p className='fresh'>Fresh</p>
//                 <div className='bowic'>
//                     <img className='bowim' src={post.communityIcon} alt="" />
//                     <div className='disflex'>
//                         <div className='con'>
//                             <p className='maintext'>{post.communityName}</p>
//                             <p className='subtext'>{post.postTitle}</p>
//                         </div>
//                         <p className='publi'>{days}d </p>
//                     </div>
//                 </div>
//                 <div className='contents'>
//                     <p>{post.postContent}</p>
//                 </div>
//                 <div className='social'>
//                     <div className='socialcon'>
//                         <div className='heart-bg'>
//                             <div className={`heart-icon ${liked ? 'liked' : 'nolike'}`} onClick={toggleDisplay}></div>
//                         </div>
//                         <div className='icontxt'>
//                             {likeCount} Likes
//                         </div>
//                     </div>
//                     <div className='socialcon'>
//                         <img className='iconssty' src={comment} alt="" />
//                         <div className='icontxt'>
//                             Comments
//                         </div>
//                     </div>
//                     <div className='socialcon'>
//                         <img className='iconssty' src={share} alt="" />
//                         <div className='icontxt'>
//                             Shares
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <>
//             <div className="maincommunity">
//                 <Communityleft />
//                 <div className="communitycont">
//                     <div className="search-bar">
//                         <FaSearch className="search-icon" />
//                         <input type="text" placeholder="Search for Bowls or conversations" />
//                     </div>
//                     <div className='mncm'>
//                         <div className='pstcon'>
//                             <img className='degicon' src={lo} alt="" />
//                             <input className='postt' type="text" placeholder='post as "attends "' />
//                         </div>
//                         <div className='scrpos'>
//                             {loading ? (
//                                 Array.from({ length: 7 }).map((_, index) => (
//                                     <Skeleton key={index} height={130} style={{ marginBottom: '10px' }} />
//                                 ))
//                             ) : (
//                                 posts.map((post) => (
//                                     <PostsComp key={post.communityId} post={post} />
//                                 ))
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 <CommunityRight />
//             </div>
//         </>
//     );
// };
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './css/communitymain.css';
import './css/postcomp.css';
import lo from './images/graduation.png';
import share from './images/share.png';
import comment from './images/chat.png';
import { CommunityPost, api } from '../../models/model';
import { CommunityRight } from './CommunityRight';
import { Communityleft } from './Communityleft';

export const ComunityMain: React.FC = () => {
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [likedCommunityIds, setLikedCommunityIds] = useState<string[]>([]);
    const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
    const [commentInput, setCommentInput] = useState<string>('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${api}community`);
                const data: CommunityPost[] = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        const fetchLikedCommunityIds = async () => {
            try {
                const response = await fetch(`${api}community/userLikes`);
                const data: string[] = await response.json();
                setLikedCommunityIds(data);
            } catch (error) {
                console.error('Error fetching liked community IDs:', error);
            }
        };

        fetchPosts();
        fetchLikedCommunityIds();
    }, []);

    const handleAddComment = async () => {
        if (selectedPost) {
            try {
                const response = await fetch(`${api}community/addcomment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ communityId: selectedPost.communityId, comment: commentInput }),
                });

                if (response.ok) {
                    const updatedPost = await response.json();
                    setPosts((prevPosts) =>
                        prevPosts.map((post) =>
                            post.communityId === updatedPost.communityId ? updatedPost : post
                        )
                    );
                    setSelectedPost(null);
                    setCommentInput('');
                } else {
                    console.error('Error adding comment');
                }
            } catch (error) {
                console.error('Error adding comment:', error);
            }
        }
    };

    const PostsComp: React.FC<{ post: CommunityPost }> = ({ post }) => {
        const [likeCount, setLikeCount] = useState(post.likesCount);
        const [liked, setLiked] = useState(likedCommunityIds.includes(post.communityId));

        const toggleDisplay = async () => {
            try {
                const response = await fetch(
                    `${api}community/${liked ? 'removecommunitypost' : 'likecommunitypost'}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ communityId: post.communityId }),
                    }
                );

                if (response.ok) {
                    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
                    setLiked(!liked);
                } else {
                    console.error('Error updating like status');
                }
            } catch (error) {
                console.error('Error toggling like:', error);
            }
        };

        const pastDate: Date = new Date(post.postedAt);
        const currentDate = new Date();
        const diffDays = currentDate.getDate() - pastDate.getDate();
        const days = diffDays < 0 ? diffDays + 30 : diffDays;

        return (
            <div className="postmn">
                <p className='fresh'>Fresh</p>
                <div className='bowic'>
                    <img className='bowim' src={post.communityIcon} alt="" />
                    <div className='disflex'>
                        <div className='con'>
                            <p className='maintext'>{post.communityName}</p>
                            <p className='subtext'>{post.postTitle}</p>
                        </div>
                        <p className='publi'>{days}d </p>
                    </div>
                </div>
                <div className='contents' onClick={() => setSelectedPost(post)}>
                    <p>{post.postContent}</p>
                </div>
                <div className='social'>
                    <div className='socialcon'>
                        <div className='heart-bg'>
                            <div className={`heart-icon ${liked ? 'liked' : 'nolike'}`} onClick={toggleDisplay}></div>
                        </div>
                        <div className='icontxt'>
                            {likeCount} Likes
                        </div>
                    </div>
                    <div className='socialcon' onClick={() => setSelectedPost(post)}>
                        <img className='iconssty' src={comment} alt="" />
                        <div className='icontxt'>
                            Comments
                        </div>
                    </div>
                    <div className='socialcon'>
                        <img className='iconssty' src={share} alt="" />
                        <div className='icontxt'>
                            Shares
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className={`maincommunity ${selectedPost ? 'blur' : ''}`}>
                <Communityleft />
                <div className="communitycont">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search for Bowls or conversations" />
                    </div>
                    <div className='mncm'>
                        <div className='pstcon'>
                            <img className='degicon' src={lo} alt="" />
                            <input className='postt' type="text" placeholder='post as "attends "' />
                        </div>
                        <div className='scrpos'>
                            {loading ? (
                                Array.from({ length: 7 }).map((_, index) => (
                                    <Skeleton key={index} height={130} style={{ marginBottom: '10px' }} />
                                ))
                            ) : (
                                posts.map((post) => (
                                    <PostsComp key={post.communityId} post={post} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <CommunityRight />
            </div>
            {selectedPost && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setSelectedPost(null)}>×</button>
                        <h2>{selectedPost.communityName}</h2>
                        <p>{selectedPost.postContent}</p>
                        <div className="comment-section">
                            <input
                                type="text"
                                value={commentInput}
                                onChange={(e) => setCommentInput(e.target.value)}
                                placeholder="Add a comment"
                            />
                            <button onClick={handleAddComment}>Add Comment</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
