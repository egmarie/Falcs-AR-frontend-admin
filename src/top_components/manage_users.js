import '../styles/admin.css'
var React = require('react');
var ReactRouterDOM = require('react-router-dom')
var ReactDOM = require('react-dom');
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function ManageUsers() {
  return(
  <>
    <NextGameControls />
  </>
  )
}

const NextGameControls = () => (
  <>
    <div className='container-fluid gx-0 p-0 m-0'>
      <h1>The Season Title and ID</h1>
      <div className='row'>
        <div className='col-sm-5 col-md-5 col-lg-5 d-flex flex-column m-2 p-2 bg-secondary'>
          <h4>Calendar</h4>

        </div>
        <div className='col-sm-4 col-md-4 col-lg-4 d-flex flex-column m-2 p-2 bg-secondary'>
          <h4>ATL Drop Schedule</h4>
          <h6>Completed ATL Drop Events</h6>
          <ul className='schedule-lists'>
            <li>name of event</li>
            <li>name of event</li>
            <li>name of event</li>

          </ul>
          <h6>Planned ATL Drop Events</h6>
          <ul className='schedule-lists'>
            <li>name of event</li>
            <li>name of event</li>
            <li>name of event</li>

          </ul>

        </div>
        <div className='col-sm-3 col-md-3 col-lg-3 m-2 d-flex flex-column p-0'>
          <div className='m-2 p-2 bg-secondary'>
            <h4>Schedule New ATL drop Event</h4>
          </div>

        </div>
      </div>

    </div>

  </>
)

