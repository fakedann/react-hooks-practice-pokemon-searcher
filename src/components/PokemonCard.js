import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {



  function handleClick(e){
    if(e.target.src === poke.sprites.front){
     e.target.src = poke.sprites.back
    }
    else{
      e.target.src = poke.sprites.front
    }
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={poke.sprites.front} onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
