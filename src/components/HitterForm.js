import React, { useState } from "react";
import { choosePlayer, chooseStats, isActive } from "../actions/teamStats";
import { connect } from 'react-redux';

const HitterForm = (props) => {
    const { choosePlayer, chooseStats, isActive } =  props;
    
    const onChangeName = (evt) => {
        choosePlayer(evt.target.value)
    }

    const onClickActivity = (evt) => {
        isActive(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        fetchData()


    }
    return(
        <div className='filter'>
            <input onChange={onChangeName} id="player" placeholder="type player name" />
            <select onClick={onClickActivity}>
                <option>Select activity...</option>
                <option value="Y">Active Player</option>
                <option value="N">Inactive Player</option>
            </select>
            <button onClick={onSubmit}>Get Stats</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playerName: state.playerName,
        seasonStats: state.seasonStats
    }
}

export default connect(mapStateToProps, { choosePlayer, chooseStats, isActive })(HitterForm);