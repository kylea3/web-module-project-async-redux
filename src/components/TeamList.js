import axios from "axios";
import React, { useEffect } from "react";
import { getTeams } from "../actions/fetchTeams";
import { connect } from 'react-redux';
import response from "../data";
import fetchTeams from "../reducers/fetchTeams";

const TeamList = (props) => {
    const { getTeams, team } =  props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        getTeams(response);
    }
    const options = {
        method: 'GET',
        url: 'https://api-baseball.p.rapidapi.com/teams',
        params: {league: '1', season: '2020'},
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
        <div>
            <h2>Select a Team to See Team Stats</h2>
            <button onClick={onSubmit}>Load Teams</button>
            {team.map(team => {
                return (
                    <div key={team.id}>
                        <h3>{team.name}</h3>
                        <img src={team.logo} />
                        <button>See Team Stats</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        team: state.fetchTeams.teams
    }
}

export default connect(mapStateToProps, { getTeams })(TeamList);