import { useQuery } from "@apollo/client";
// import { useEffect } from "react";
import { Userexists } from "../../queries";
import { auth } from "./firbase";

export const Checkinggoogle = () => {
    console.log(auth.currentUser?.email)
    const {loading , error , data } = useQuery(Userexists , {variables:{email:auth.currentUser?.email},})
      
      if(loading) {
        return <p>loading</p>
      }
      if (error){
        return <p>{error.message};
        </p>
      }
      location.reload
      location.reload
      console.log(data)
      if (data.userexist === null){
        window.location.href='/newuser'
      }
      if(data && data.userexist.email){
        window.location.href = '/community'
      }
      
  
  return (
    <div>
        {data.userexist.email}
        <p className="insert"></p>
    </div>
  )
}
