import './App.css'
import AxiosGet from './Components/AxiosGet'
import FetchApi from './Components/FetchApi'
import Navbar from './Components/Navbar'
import Pedidos from './Components/Pedidos'


function App() {

  return (
    <div className='app'>
      <Navbar/>
      {/* <FetchApi/> */}
      {/* <AxiosGet/> */}
      <Pedidos/>
    </div>
  )
}

export default App
