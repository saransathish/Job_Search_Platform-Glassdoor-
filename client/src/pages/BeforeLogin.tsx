import GlassdoorFeatureComponent from '../components/LoginCom/FeatureComp'
import NewFeatureComponent from '../components/LoginCom/NewFeatureComponent'
import ResponsiveComponent from '../components/LoginCom/Responsivecomp'
import SearchInspirationComponent from '../components/LoginCom/Startsearch'
import NavBar from '../components/navBarBeforeLog/NavBar'
// import ResponsiveComponent2 from '../components/LoginCom/Responsivecomp2'

function BeforeLog() {

    return (
      <>
        <NavBar />
         <ResponsiveComponent />
         {/* <ResponsiveComponent2/> */}
        <NewFeatureComponent />
        <GlassdoorFeatureComponent />
        <SearchInspirationComponent />
      </>
    )
  }
  
  export default BeforeLog
  