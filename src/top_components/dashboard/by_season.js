import '../../styles/admin.css'
var React = require('react');
var ReactRouterDOM = require('react-router-dom');
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'; 
import {season_players_per_game_event, season_top_games_for_engagement, season_engagement_trends} from './season_charts'

const {Link} = ReactRouterDOM

export default function BySeason() {

  
return(
  <>

    <div className='container gx-0 m-0 p-0'>
      <h2 className='my-2'>The Season Title and ID</h2>

      <div className='row d-flex flex-row justify-content-center'>

        <div className='col d-flex flex-column m-0 p-0'>

          <div className='m-2 p-4 shadow d-flex justify-content-center align-items-start flex-column'>
            <hr className='ms-0' id='firstLine'></hr>
            <h1>24k</h1>
            <h4>average players per game</h4>
            <div id='chart_season_average_players'></div>
          </div>

          <div className='m-2 p-4 shadow d-flex justify-content-center align-items-start flex-column'>

            <div id='chart_season_average_winners' className='d-flex flex-row'>

              <h1>21</h1>
              <hr id='secondLine'></hr>
            </div>
            <div id='chart_season_average_winners_descript'>
              <h4>average winners per game</h4>
            </div>
          </div>
         
          <div className='m-2 p-4 shadow d-flex justify-content-center align-items-start flex-row'>
            <hr id='thirdLine'></hr>
            <div id='chart_season_total_winners' className='d-flex flex-column p-2'>
             <h1>83</h1>
            <h4>total winners in season</h4>
            </div>
          </div>
        </div>



        <div className='col-9 m-1 d-flex flex-column p-0 align-items-center container-fluid'>
        <div className='d-flex container-fluid p-0 gx-0'>
          
              
              <div className='d-flex p-0 season_chart_row shadow'>
                <div id='chart_season_top_three_games'>
                <HighchartsReact highcharts={Highcharts} options={season_top_games_for_engagement} isPureConfig={true} />
                </div>
              </div>

              <div className='d-flex flex-fill-lg p-0 season_chart_row shadow'>
                <div id='chart_season_engagement_line'>
                <HighchartsReact highcharts={Highcharts} options={season_engagement_trends} isPureConfig={true} />
                </div>
              </div>
              </div>
          


          <div className='my-2 mx-0 p-0 container-fluid d-flex flex-fill shadow' id='averagePlayers'>
            <div id='chart_season_players_per_event'>
            <HighchartsReact highcharts={Highcharts} options={season_players_per_game_event} isPureConfig={true} />
            </div>
          </div>
        </div>
        </div>
        </div>




  </>
)}

 