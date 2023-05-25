import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {AiFillHome, AiFillWarning} from 'react-icons/ai'
import {HiTemplate} from 'react-icons/hi'
import {GiPathDistance} from 'react-icons/gi'
import {MdDateRange} from 'react-icons/md'
import {BsArrowRightCircleFill} from 'react-icons/bs'

const List = props => {
  const {data} = props
  console.log(data)
  return (
    <div>
      <div className="d-flex flex-row flex-shrink">
        <div className="m-2 p-2">
          <h2 style={{color: 'black', fontSize: '20px', fontWeight: '800'}}>
            From
          </h2>
          <p>{data.moving_from}</p>
        </div>
        <div className="text-center">
          <p className="mt-4">
            <BsArrowRightCircleFill size="50px" color="#ec4913" />
          </p>
        </div>
        <div className="m-2 p-2">
          <h2 style={{color: 'black', fontSize: '20px', fontWeight: '800'}}>
            To
          </h2>
          <p>{data.moving_to}</p>
        </div>
        <div className="m-2 p-2">
          <h2 style={{color: 'black', fontSize: '20px', fontWeight: '800'}}>
            Request#
          </h2>
          <p style={{color: '#ec4913', fontSize: '15px', fontWeight: '600'}}>
            {data.estimate_id}
          </p>
        </div>
      </div>
      <div className="d-flex flex-row">
        <p className="m-2 p-2">
          <AiFillHome size="30px" color="#ec4913" />
          {data.property_size}
        </p>
        <p className="m-2 p-2">
          <HiTemplate size="30px" color="#ec4913" />
          {data.total_items}
        </p>
        <p className="m-2 p-2">
          <GiPathDistance size="30px" color="#ec4913" />
          {data.distance}
        </p>
        <p className="m-2 p-2">
          <MdDateRange size="30px" color="#ec4913" />
          {data.moving_on}
        </p>

        <input
          type="checkbox"
          id="mycheck"
          style={{color: 'white', backgroundColor: '#ec4913'}}
          checked
        />
        <label htmlFor="mycheck" className="m-2 p-2">
          {' '}
          Is Flexible{' '}
        </label>
        <button
          type="button"
          className="m-2 p-2"
          style={{
            color: '#ec4913',
            backgroundColor: 'white',
            border: '2px solid #ec4913',
            borderRadius: '6px',
          }}
        >
          View Move Details
        </button>
        <button
          type="button"
          className="m-2 p-2"
          style={{
            backgroundColor: '#ec4913',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
          }}
        >
          Quates Await
        </button>
      </div>
      <div>
        <p>
          <AiFillWarning size="20px" color="#ec4913" />
          <span style={{color: 'black', fontSize: '15px', fontWeight: '800'}}>
            Disclaimer:
          </span>{' '}
          Please Update your move date before two days of shifting{' '}
        </p>
      </div>
      <hr />
    </div>
  )
}

export default List
