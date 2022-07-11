import './styles/main.scss'
import './styles/calendar.scss'
var React = require('react');
import { useEffect, useState} from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
//import ROUTES from './ROUTES'

import Home from './top_components/home'
import Dashboard from './top_components/dashboard1'
import GameSchedule from './top_components/game_schedule'
import ManageUsers from './top_components/manage_users'
import ByGame from './top_components/dashboard/by_game'
import BySeason from './top_components/dashboard/by_season'

import NotFound from './top_components/notfound'


function App() {

  const [isNavActive, setNavActive] = useState('dashSeasonPage')
  

    console.log('react is working')
    return(
        <>
    <BrowserRouter>
      <header className="">
          <AdminNav isNavActive={isNavActive} setNavActive={setNavActive} />
        
      </header>

      <div className="container-fluid p-0 m-0 gx-0">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/manage-users' element={<ManageUsers />} />
          <Route path='/game-schedule' element={<GameSchedule />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='/dashboard/by-game' element={<ByGame />} />
            <Route path='/dashboard/by-season' element={<BySeason />} />
          </Route>
          <Route element={<NotFound />} />
        </Routes>
      
      </div>

      <footer className="border-top pt-3">
        <p className="small text-center text-muted">
          <Link className="text-muted mr-1 p-3 footerLinks" to="/">
            Home
          </Link>
        </p>
      </footer>
    </BrowserRouter>

        </>

        )
    }

    function AdminNav(props) {
      function handleActiveToggle(id) {
        props.setNavActive(id)
      }
    
      return (
        <>
          <div className='container-fluid gx-0 bg-dark text-light p-3'>
    
            <div className='row'>
    
              <div className='col-2'>
                <Link to='/' className={`px-2 justify-content-start m-0 ${props.isNavActive === 'homePage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('homePage')} id='homePage'>ATL Logo</Link>
              </div>
    
              <div className='col-8 m-0 px-0 d-flex justify-content-center align-items-center' id='navContainer'>
                <Link to='/dashboard/by-season' 
            className={`px-2 ${props.isNavActive === 'dashboardPage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('dashboardPage')} id='dashboardPage'>Dashboard</Link>
    
                <Link to='/game-schedule' className={`px-2 ${props.isNavActive === 'gameSchedulePage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('gameSchedulePage')} id='gameSchedulePage'>Game Schedule</Link>
    
                <Link to='/manage-users' className={`px-2 ${props.isNavActive === 'manageUsersPage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('manageUsersPage')} id='manageUsersPage'>Manage Users</Link>
              </div>
    
              <div className='col-2 d-flex justify-content-start align-items-center m-0'>
                <Link to='/manage-users' className='px-4 py-2 border border-white rounded-pill'>Logout</Link>
              </div>
            </div>
          </div>
        </>
      )
    }
function RouteWithSubRoutes(route) {
  return (
    ROUTES.map((route) => <Route path={route.path} element={route.element} />)
      )}


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);



if (module.hot) {
   module.hot.accept() 
}

/*           */