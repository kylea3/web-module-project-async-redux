import axios from "axios";
import React, { useEffect } from "react";
import { getTeamStats, getYear } from "../actions/teamStats";
import { connect } from 'react-redux';
import response from "../teamStatsData"

const TeamStats = (props) => {
    const { getTeamStats, getYear } =  props;
    
    const onClickActivity = (evt) => {
        getYear(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        getTeamStats(response)
        console.log(response)
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
    )
}

const mapStateToProps = state => {
    return {
        year: state.teamStats.year
    }
}

export default connect(mapStateToProps, { getTeamStats, getYear  })(TeamStats);