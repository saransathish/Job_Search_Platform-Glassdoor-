
interface logos{
    logos:{
        logo_url :string | undefined;
        company_name:string;
        website:string | undefined;
        rating:number
        
    }
}

export const Logos1 = (props:logos) => {
  return (
    <div className="logos">
        <img src={props.logos.logo_url} alt="img" />
       <a href={props.logos.website}><p className='comapnynm'>{props.logos.company_name}</p></a> 


    </div>
  )
}
