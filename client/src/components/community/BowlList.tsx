
interface bowls {
    bowl:{
        icon:string
        name:string
        bowllink:string
    }
}
export const BowlList = (props:bowls) => {
  return (
    <>
    <div className="iconcont">
        <img className='bowlicon' src={props.bowl.icon} alt="" />
        <a href="https://www.glassdoor.co.in/Community/pwc-iac"><p className="bowlname">{props.bowl.name}</p></a>

    </div>
    </>
  )
}
