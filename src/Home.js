import {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaShuttleVan} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiFillProfile} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
import List from './List'

const Home = () => {
  const [main, setMain] = useState()
  const [mres, setRes] = useState()
  useEffect(() => {
    const getData = async () => {
      const url = 'http://test.api.boxigo.in/sample-data/'
      const data = await axios(url)
      const res = data.data.Customer_Estimate_Flow
      setRes(res.map(e => <List data={e} />))
      setMain(res)
      console.log(res)
    }
    getData()
  }, [])

  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="w-5">
        <h3 className="p-2 m-2" style={{color: 'black', fontFamily: 'roboto'}}>
          <FaShuttleVan /> My Moves
        </h3>
        <h3 className="p-2 m-2" style={{color: 'black', fontFamily: 'roboto'}}>
          <CgProfile /> My Profile
        </h3>
        <h3
          className="p-2 m-2 w-4"
          style={{color: 'black', fontFamily: 'roboto'}}
        >
          <AiFillProfile />
          Get Quote
        </h3>
        <h3 className="p-2 m-2" style={{color: 'black', fontFamily: 'roboto'}}>
          <BiLogOutCircle />
          Log Out
        </h3>
      </div>
      <div>
        <h1 style={{color: 'black', fontFamily: 'roboto'}}>My Moves</h1>
        {mres}
      </div>
    </div>
  )
}

export default Home
