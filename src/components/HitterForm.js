import React, { useState } from "react";
import { choosePlayer } from "../actions";
import { connect } from 'react-redux';

const HitterForm = (props) => {
    const [name, setName] = useState('');
    const [stats, setStats] = useState('');
    const onChangeName = (evt) => {
        setName({
            ...name,
            name: evt.target.value
        })
    }

    const onClickSeason = (evt) => {
        setStats({
            ...stats,
            stats: evt.target.value
        })
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

    }
    return(
        <div className='filter'>
            <input onChange={onChangeName} id="player" placeholder="type player name" />
            <select onClick={onClickSeason}>
                <option  value='R'>Regular Season</option>
                <option  value='D'>Division Series</option>
                <option  value='L'>Championship Series</option>
                <option  value='W'>World Series</option>
            </select>
            <button>Get Stats</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playerName: state.playerName
    }
}

export default connect(mapStateToProps, { choosePlayer })(HitterForm);