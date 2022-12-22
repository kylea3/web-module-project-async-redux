import axios from "axios";
import React, { useEffect } from "react";
import { getTeamStats, getYear, setIsActive } from "../actions/teamStats";
import { connect } from 'react-redux';
import response from "../teamStatsData"
import '../styling/TeamStats.css'

const TeamStats = (props) => {
    const { getTeamStats, getYear, teamStats, isActive, setIsActive } =  props;
    
    const onClickActivity = (evt) => {
        getYear(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        getTeamStats(response);
        setIsActive()
    }

    const options = {
        method: 'GET',
        url: 'https://api-baseball.p.rapidapi.com/teams/statistics',
        params: {league: '1', season: '2020', team: '5'},
        headers: {
          'X-RapidAPI-Key': 'fcd22bc93amshff5f70799ffe20ep11d60ajsn686ccaab042f',
          'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
        }
      };
    // useEffect(() => {
    //     // getTeams();
    //   axios.request(options)
    //     .then(res => 
    //         console.log(res))
    //     .catch(err => 
    //         console.error(err))
    // }, []);

    return(
        <>
        <div className='filter'>
            <select onClick={onClickActivity}>
                <option>Select Year</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
            </select>
            <button onClick={onSubmit}>Get Stats</button>
        </div>
        {isActive && <div className='accordion'>
            <div className='accordion-item'>
                <div className='accordion-title' onClick={onSubmit}>
                    <div><h3>Games Played</h3></div>
                </div>
                <div className='accordion-item-body'>
                    <div className='accordion-subtitle'>
                        <h4>Wins</h4>
                    </div>    
                    <div className='accordion-item-subtitle-body'>
                        <div className='accordion-subtitle-headers'>
                            <h4>All</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Percentage: {teamStats.games.wins.all.percentage}</p>
                                <p>Total: {teamStats.games.wins.all.total}</p>
                            </div>
                        </div>
                        <div className='accordion-subtitle-headers'>
                            <h4>Away</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Percentage: {teamStats.games.wins.away.percentage}</p>
                                <p>Total: {teamStats.games.wins.away.total}</p>
                            </div>
                        </div>
                        <div className='accordion-subtitle-headers'>
                            <h4>Home</h4>
                        </div>
                        <div className="accordion-subtitle-headers-body">
                            <div className='accordion-subtitle-content'>
                                <p>Percentage: {teamStats.games.wins.home.percentage}</p>
                                <p>Total: {teamStats.games.wins.home.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-subtitle'>
                        <h4>Losses</h4>
                    </div>    
                    <div className='accordion-item-subtitle-body'>
                        <div className='accordion-subtitle-headers'>
                            <h4>All</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Percentage: {teamStats.games.loses.all.percentage}</p>
                                <p>Total: {teamStats.games.loses.all.total}</p>
                            </div>
                        </div>
                        <div className='accordion-subtitle-headers'>
                            <h4>Away</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Percentage: {teamStats.games.loses.away.percentage}</p>
                                <p>Total: {teamStats.games.loses.away.total}</p>
                            </div>
                        </div>
                        <div className='accordion-subtitle-headers'>
                            <h4>Home</h4>
                        </div>
                        <div className="accordion-subtitle-headers-body">
                            <div className='accordion-subtitle-content'>
                                <p>Percentage: {teamStats.games.loses.home.percentage}</p>
                                <p>Total: {teamStats.games.loses.home.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-subtitle'>
                        <h4>Played</h4>
                    </div>    
                    <div className='accordion-item-subtitle-body'>
                        <div className='accordion-subtitle-content'>
                            <p>Away: {teamStats.games.played.away}</p>
                            <p>Home: {teamStats.games.played.home}</p>
                            <p>Total: {teamStats.games.played.all}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='accordion-item'>
                <div className='accordion-title' onClick={onSubmit}>
                    <div><h3>Runs Scored</h3></div>
                </div>
                <div className='accordion-item-body'>
                    <div className='accordion-subtitle'>
                        <h4>Against</h4>
                    </div>    
                    <div className='accordion-item-subtitle-body'>
                        <div className='accordion-subtitle-headers'>
                            <h4>Average</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Away: {teamStats.points.against.average.away}</p>
                                <p>Home: {teamStats.points.against.average.home}</p>
                                <p>All: {teamStats.points.against.average.all}</p>
                            </div>
                        </div>
                        <div className='accordion-subtitle-headers'>
                            <h4>Total</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Away: {teamStats.points.against.total.away}</p>
                                <p>Home: {teamStats.points.against.total.home}</p>
                                <p>All: {teamStats.points.against.total.all}</p>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-subtitle'>
                        <h4>For</h4>
                    </div>    
                    <div className='accordion-item-subtitle-body'>
                        <div className='accordion-subtitle-headers'>
                            <h4>Average</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Away: {teamStats.points.for.average.away}</p>
                                <p>Home: {teamStats.points.for.average.home}</p>
                                <p>All: {teamStats.points.for.average.all}</p>
                            </div>
                        </div>
                        <div className='accordion-subtitle-headers'>
                            <h4>Total</h4>
                        </div>
                        <div className='accordion-subtitle-headers-body'>
                            <div className='accordion-subtitle-content'>
                                <p>Away: {teamStats.points.for.total.away}</p>
                                <p>Home: {teamStats.points.for.total.home}</p>
                                <p>All: {teamStats.points.for.total.all}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        year: state.teamStats.year,
        teamStats: state.teamStats.teamStats,
        isActive: state.teamStats.isActive,
        currentTeam: state.fetchTeams.currentTeam
    }
}

export default connect(mapStateToProps, { getTeamStats, getYear, setIsActive })(TeamStats);