import '../styles/admin.css'
var React = require('react');
import { useEffect, useState , useRef } from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');


import BySeason from './dashboard/by_season'
import ByGame from './dashboard/by_game'


const {Link, Route, Routes} = ReactRouterDOM

export default function Dashboard() {
  const [isDashActive, setDashActive] = useState('dashSeasonPage')
  // dashboardSub.map(({path, component}) => (
  // console.log(`admin/dashboard/${path}`)
  // ))

  function handleActiveToggle(id) {
    setDashActive(id)
  }
  return (
    <>
      <div className='container-fluid gx-0 p-0 m-0'>
        <div className='row'>
          <div className='col-3 d-flex flex-column p-1 align-items-center'>
            <div className='d-flex justify-content-center align-items-center m-2 py-3' id='dashToggle'>

              <div className={`m-0 p-0 dashOption ${isDashActive === 'dashSeasonPage' ? 'activeDashPage' : ''}`}
              onClick={e => handleActiveToggle('dashSeasonPage')} id='dashSeasonPage'>
                <Link to='/dashboard/by-season' className='m-2'>
                  By Season</Link></div>

              <div className={`m-0 p-0 dashOption ${isDashActive === 'dashGamePage' ? 'activeDashPage' : ''}`}
              id='dashGamePage' onClick={e => handleActiveToggle('dashGamePage')}>
                <Link to='/dashboard/by-game' className='m-2'>
                  By Game</Link></div>

            </div>

            <div className='dropdown'>
              <button className='btn btn-secondary dropdown-toggle m-0 container-fluid' type='button'
              id='dropdownMenuButton1'
  data-bs-toggle='dropdown' aria-expanded='false'>
                Dropdown button
              </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                  <li><a className='dropdown-item' href='#'>Action</a></li>
                  <li><a className='dropdown-item' href='#'>Another action</a></li>
                  <li><a className='dropdown-item' href='#'>Something else here</a></li>
                </ul>
            </div>
          </div>


          <div className='col-9 bg-light'>

            <Routes>
              
                <Route path={`/by-game`} element={<ByGame />} />
                <Route path={`/by-season`} element={<BySeason />} />

            </Routes>

          </div>
        </div>

      </div>

    </>
  )
}
