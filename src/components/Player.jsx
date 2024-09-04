import { useState, useRef } from "react"; 
export default function Player() {

  const [playerName, setPlayerName] = useState('');
  const player = useRef();

  function handleClick(){
   setPlayerName(player.current.value);
   player.current.value='';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
