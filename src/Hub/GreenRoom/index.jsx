import React, { Component } from 'react';

import JoinURL from './JoinURL';
import Player from './Player';

import './GreenRoom.css';

class GreenRoom extends Component {
  render() {
    const {session, players} = this.props;

    return (
      <div className="GreenRoom">
        <h2>Drawsy GreenRoom</h2>

        { session
          ? <JoinURL session={session}/>
          : null
        }

        <div className="playerCount">
            {players.size}
        </div>

        <ul className="players">
            { players.map(player => {
                return <li key={player.remote.id}>
                    <Player player={player}/>
                </li>;
            }) }
        </ul>
      </div>
    );
  }
}

export default GreenRoom;