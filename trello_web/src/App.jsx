import Register from './pages/Auth/Register'
import { StarsCanvas } from './components/Canvas/StarsCanvas'
// import Board from './pages/Boards/_id'

function App() {

  return (
    <>
      <div className="px-14">
        <Register />
        <StarsCanvas />
      </div>

      {/* <Board /> */}
    </>
  )
}

export default App
