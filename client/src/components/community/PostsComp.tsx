import './css/postcomp.css'
import share from './images/share.png'
import like from './images/heart.png'
import comment from './images/chat.png'
import { CommunityPost } from '../../models/model'

interface post{
    post :CommunityPost
}
export const PostsComp = (props:post) => {
    const pastDate: Date = new Date(props.post.postedAt);
    const currentDate = new Date();
    const diffDays = currentDate.getDate() - pastDate.getDate();
    const days = diffDays < 0 ? diffDays + 30 : diffDays;
  return (
<>

<div className="postmn">
    <p className='fresh'>Fresh</p>
    <div className='bowic'>
        <img className ='bowim' src={props.post.communityIcon} alt="" />
        <div className='disflex'>
            <div className='con'>
                <p className='maintext'>{props.post.communityName}</p>
                <p className='subtext'>{props.post.postTitle}</p>
            </div>
            <p className='publi'>{days}d </p>
        </div>

    </div>
    <div className='contents'>
        <p>{props.post.postContent}</p>

    </div>
    <div className='social'>
<div className='socialcon'>
    <img className ='iconssty' src={like} alt="" />
    <div className='icontxt'>
        Likes
    </div>
</div>

<div className='socialcon'>
<img className ='iconssty' src={comment} alt="" />

    <div className='icontxt'>
        Comments
    </div>
</div>

<div className='socialcon'>
<img  className ='iconssty' src={share} alt="" />

    <div className='icontxt'>
        Shares
    </div>
</div>





    </div>
<div>

</div>

</div>
</>  


)
}
