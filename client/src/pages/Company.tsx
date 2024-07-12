import NavigationBar from "./NavigationBar"
import SearchInspirationComponent from "../components/LoginCom/Startsearch"
import { CompanyHeader } from "../components/companies/CompanyHeader"
import { MainCompany } from "../components/companies/MainCompany"

export const Company = () => {
  return (<>
    <NavigationBar activeTab="Company" />
    <CompanyHeader />
    <MainCompany />
    <SearchInspirationComponent />



</>
    
  )
}
