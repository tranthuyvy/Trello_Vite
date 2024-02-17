import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import { StarsCanvas } from './components/Canvas/StarsCanvas'
import Board from './pages/Boards/_id'

function App() {

  return (
    <>
      {/* <div className="px-14 pb-14">
        <Register />
        <StarsCanvas />
      </div> */}
      <div className="px-14 pb-14">
        <Login />
        <StarsCanvas />
      </div>
      <Board />
    </>
  )
}

export default App
