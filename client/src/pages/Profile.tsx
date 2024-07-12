import NavigationBar from "./NavigationBar"
import SearchInspirationComponent from "../components/LoginCom/Startsearch"
import { Profilemain } from "../components/profile/Profilemain"

export const Profile = () => {
  return (
    <>
    <NavigationBar activeTab="nothing" />
    <Profilemain />
    <SearchInspirationComponent />

    </>
  )
}
