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
import { CommunityComment } from './CommunityComment';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ComunityMain: React.FC = () => {
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [likedCommunityIds, setLikedCommunityIds] = useState<string[]>([]);
    const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
    const [commentLoading, setCommentLoading] = useState<boolean>(true);
    const [commentInput, setCommentInput] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    function Days(date: string) {
        const pastDate: Date = new Date(date);
        const currentDate = new Date();
        const diffDays = currentDate.getDate() - pastDate.getDate();
        const days = diffDays < 0 ? diffDays + 30 : diffDays;
        return days;
    }

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

    useEffect(() => {
        if (selectedPost) {
            setCommentLoading(true);
            setTimeout(() => {
                setCommentLoading(false);
            }, 1000);
        }
    }, [selectedPost]);

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
                    const updatedPosts = await response.json();
                    setPosts(updatedPosts);
                    setCommentInput('');
                    toast.success('Comment added successfully!');
                } else {
                    console.error('Error adding comment');
                    toast.error('Error adding comment');
                }
            } catch (error) {
                console.error('Error adding comment:', error);
                toast.error('Error adding comment');
            }
            setSelectedPost(null);
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
                            {post.comment.length} Comments
                        </div>
                    </div>
                    <div className='socialcon'>
                        <img className='iconssty noshareic' src={share} alt="" />
                        <div className='icontxt noshareic'>
                            Shares
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const filteredPosts = posts.filter(post =>
        post.postTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.communityName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <ToastContainer />
            <div className={`maincommunity ${selectedPost ? 'blur' : ''}`}>
                <Communityleft />
                <div className="communitycont">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            className='searchbowl'
                            placeholder="Search for Bowls or conversations"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
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
                                filteredPosts.length > 0 ? (
                                    filteredPosts.map((post) => (
                                        <PostsComp key={post.communityId} post={post} />
                                    ))
                                ) : (
                                    posts.map((post) => (
                                        <PostsComp key={post.communityId} post={post} />
                                    ))
                                )
                            )}
                            {filteredPosts.length === 0 && (
                                <p>No posts or bowls found.</p>
                            )}
                        </div>
                    </div>
                </div>
                <CommunityRight />
            </div>
            {selectedPost && (
                <div className='backdrop'>
                    <div className="modal1">
                        <center><p className='titlrpost'>{selectedPost.communityName}</p></center>
                        <button className="close-button1" onClick={() => setSelectedPost(null)}>X</button>
                        <div className="modal-header">
                            <div className='modalheadicon'>
                                <img className='modalimg' src={selectedPost.communityIcon} alt="" />
                                <div className='modalti'>
                                    <p className='modtil1'>{selectedPost.communityName}</p>
                                    <p className='modtil2'>{selectedPost.postTitle}</p>
                                </div>
                            </div>
                            <p className='modalpostat'>{Days(selectedPost.postedAt)}d</p>
                        </div>
                        <p className='postcomcon'>&emsp;&emsp; {selectedPost.postContent}</p>
                        <textarea className='commentinpcom'
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                            placeholder="Add a comment"
                        />
                        <button className='cancelcomm' onClick={() => setCommentInput('')}>Cancel</button>
                        <button className='addcomm' onClick={handleAddComment}>Comment</button>
                        <div className='comentdetai'>
                            {commentLoading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <Skeleton key={index} height={100} style={{ marginBottom: '10px' }} />
                                ))
                            ) : (
                                selectedPost.comment?.length > 0 && selectedPost.comment.map((comment, index) => (
                                    <CommunityComment key={index} comment={comment} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
