import NavigationBar from "./NavigationBar"
import SearchInspirationComponent from "../components/LoginCom/Startsearch"
import { Salaryimage } from "../components/Salary/Salaryimage"

export const Recommended = () => {
  return (
<>
        <NavigationBar activeTab="Salary"/>
        <Salaryimage />    
        <SearchInspirationComponent />
    
    
    </>  )
}
