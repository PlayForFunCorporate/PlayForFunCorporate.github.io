import React from 'react'
import PFFPresentation from '../../components/PFFPresentation/PFFPresentation';
import PFFGames from '../../components/PFFGames/PFFGames';
import "./style.css"

const Home = () => {
  return (
    <>
      <div id="illustration">
        <img src={require('./img/PFFLand.png')}/>
      </div>
      <PFFPresentation></PFFPresentation>
      <PFFGames></PFFGames>
    </>
  )
}


export default Home;