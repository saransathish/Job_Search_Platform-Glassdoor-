import NavigationBar from "./NavigationBar"
import SearchInspirationComponent from "../components/LoginCom/Startsearch"
import { ComunityMain } from "../components/community/ComunityMain"

export const Community = () => {
  return (
    <>
        <NavigationBar activeTab="Community"/>
        <ComunityMain />
        <SearchInspirationComponent />
    
    
    
    </>
  )
}
