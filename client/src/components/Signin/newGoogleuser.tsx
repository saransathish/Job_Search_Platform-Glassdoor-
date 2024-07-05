import GlassdoorFeatureComponent from "../LoginCom/FeatureComp"
import NewFeatureComponent from "../LoginCom/NewFeatureComponent"
import Responsivegoogle from "../LoginCom/Responsivegoogle"
import SearchInspirationComponent from "../LoginCom/Startsearch"
import NavBar from "../navBarBeforeLog/NavBar"

export const NewGoogleuser = () => {
  return (
    <>
        <NavBar />
         <Responsivegoogle />
        <NewFeatureComponent />
        <GlassdoorFeatureComponent />
        <SearchInspirationComponent />    
    </>
  )
}
