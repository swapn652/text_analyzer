import { Intro } from "./components/Intro"
import { MainSection } from "./components/MainSection"

function App() {
  return (
    <div className = "p-[1rem] md:p-[2rem] min-h-screen" style = {{background: "radial-gradient(100% 100% at 49.12% 0%, #FFFFFF 0%, #EFF6FF 100%)"}}>
      <Intro/>
      <MainSection/>
    </div>
  )
}

export default App
