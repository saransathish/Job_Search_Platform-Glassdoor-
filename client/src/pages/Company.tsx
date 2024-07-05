import NavigationBar from "../components/Afterlogin/NavigationBar"
import SearchInspirationComponent from "../components/LoginCom/Startsearch"
import { CompanyHeader } from "../components/companies/CompanyHeader"
import { MainCompany } from "../components/companies/MainCompany"

export const Company = () => {
  return (<>
    <NavigationBar />
    <CompanyHeader />
    <MainCompany />
    <SearchInspirationComponent />



</>
    
  )
}
