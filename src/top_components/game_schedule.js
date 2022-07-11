import '../styles/admin.css'
import '../styles/calendar.scss'
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';

export default function GameSchedule() {
  const [gameEvents, setGameEvents] = useState([]);
  const [newDate, setNewDate] = useState(new Date());
  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [day, setDay] = useState()

  useEffect(() => {
    if (localStorage.getItem("DATE DATA")) {
      setGameEvents(JSON.parse(localStorage.getItem("DATE DATA")))
}
}, [])

// run every time the jobApps state changes
useEffect(() => {
  localStorage.setItem("DATA DATA", JSON.stringify(gameEvents))
}, [gameEvents]);
  // const [year, setYear] = useState(newDate.getFullYear())
  // const [month, setMonth] = useState(newDate.getMonth())
  // const [day, setDay] = useState(newDate.getDay())
  console.log(newDate.getFullYear())
  return(
  <>
    <CalendarSchedule newDate={newDate} setNewDate={setNewDate} gameEvents={gameEvents} setGameEvents={setGameEvents} />
  </>
  )
}


function CalendarSchedule(props) {
let GameDate = props.newDate

  const [year, setYear] = useState(GameDate.getFullYear())
  const [month, setMonth] = useState(GameDate.getMonth())
  const [day, setDay] = useState(GameDate.getDay())

  console.log(year)
  console.log(month)
  console.log(day)

 const years = [2022, 2023, 2024, 2025, 2026]
 const months = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
 const days = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

function handleSubmit(e) {
  e.preventDefault()
  props.setNewDate(new Date(year, month, day))
  props.setGameEvents(prev => prev.concat({year, month, day, id: Date.now()}))

  console.log("GAME EVENTS ARRAY")
  console.log(props.gameEvents)
  setYear("")
  setMonth("")
  setDay("")

}
console.log(props.gameEvents)
  return(
  <>
    <div className='container-fluid gx-0 p-0 pt-5 m-0'>
      <div className='p-3 m-3 d-flex flex-row container-fluid'>
        <div className='justify-content-start'>
          <h2>Season Schedule</h2>
          <h4>ATL Drop</h4>
          </div>
          <div className='d-flex justify-content-end align-items-center flex-grow-1 pe-5 me-3'>
          <div className='m-0 p-0 d-flex justify-content-center align-items-center'>
            <h4 className='px-5 py-3 m-0 border rounded-pill'>+ Schedule New Event</h4>
          </div>
          </div>
      </div>

      <div className='row'>
          <div className='col-md-6 col-lg-6 m-0 p-0 d-flex justify-content-center container-fluid' id='calendarContainer'>
            <Calendar onChange={props.setNewDate} value={props.newDate} />
        
          </div>

        <div className='col-md-6 col-lg-6 d-flex flex-column ps-5 p-3 '>

        <div className='my-3 mx-2'>
          <form onSubmit={handleSubmit}>
          <p>New Date</p>
          <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button"
               id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {`${year}` != '' ? `${year}` : 'Set Year'}
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton2'>
                  {years.map((yearA) => <li key={`${yearA}year`}><a className="dropdown-item" href="#" id={yearA} onClick={(e) => setYear(e.target.id)}>{`${yearA}`}</a></li> )}
                </ul>
          </div>

          <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button"
               id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {`${month}` != '' ? `${month}` : 'Set Month'}
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton3'>
                  {months.map((monthA) => <li key={`${monthA}month`}><a className="dropdown-item" href="#" id={monthA} onClick={(e) => setMonth(e.target.id)}>{`${monthA}`}</a></li> )}
                </ul>
          </div>

          <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button"
               id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {`${day}` != '' ? day : 'Set day'}
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton3'>
                  {days.map((dayA) => <li key={`${dayA}day`}><a className="dropdown-item" href="#" id={dayA} onClick={(e) => setDay(e.target.id)}>{`${dayA}`}</a></li> )}
                </ul>
          </div>

          <button type='submit'>Confirm Event</button>
          </form>
            
            
          </div>
          <h4>Date</h4>
            <h5>Time</h5>
          <div className='mt-3 mx-2 mb-0 border-top'>
          <h6 className='pt-3'>Completed ATL Drop Events</h6>
          <ul className='schedule-lists '>
            <li className='d-flex flex-row align-items-center'><h5>name of event</h5><p>Date of Event</p><p>Time of Event</p></li>
            <li className='d-flex flex-row align-items-center'><h5>name of event</h5><p>Date of Event</p><p>Time of Event</p></li>

          </ul>
          </div>
          <div className='my-3 mx-2 border-top'>
          <h6 className='pt-3'>Planned ATL Drop Events</h6>
          <ul className='schedule-lists d-flex flex-column'>
            <li className='d-flex flex-row align-items-center'><h5>name of event</h5><p>Date of Event</p><p>Time of Event</p> </li>
            <li className='d-flex flex-row align-items-center'><h5>name of event</h5><p>Date of Event</p><p>Time of Event</p> </li>
          </ul>
          </div>

          </div>
      
      </div>

    </div>
    

  </>
)}

//