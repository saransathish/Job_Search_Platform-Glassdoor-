import './css/bowls.css'


interface bowls {
  bowl:{
      icon:string
      name:string
      desc:string
  }
}

export const Bowls = (props:bowls) => {
  return (
    <>
    <div className="div1">
        <img className='bowlimg' src={props.bowl.icon} alt="" />
        <div className="div2">
            <p className="bowltitle">{props.bowl.name}</p>
            <p className="bowldesc">{props.bowl.desc}</p>
            <div className="div3">
            <a href="https://www.glassdoor.co.in/Community/search/bowls">
                <button className="viewbtn"> 
                    view
                </button></a>
                <a href="https://www.glassdoor.co.in/Community/search/bowls"><button className="flwbtn">Follow</button></a>

            </div>
        </div>

    </div>
    
    </>
  )
}
