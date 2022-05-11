import './PFFGames.css';
import GameCard from '../GameCard/GameCard.js';
import { Routes, Route, Link } from "react-router-dom";

function PFFGames()
{
    return(
        <>
            <div id="PFFGames">
                <Link to="/PFF_Pendu">
                    <GameCard num="01" title="Pendu" desc="Le pendu classique" imgsrc={require("./img/hangman.jpg")}></GameCard>
                </Link>
                <Link to="/PFF_Tetris">
                    <GameCard num="02" title="Tetris" desc="Le jeu de briques le plus connu du monde !" imgsrc={require("./img/tetris.jpg")} ></GameCard>
                </Link>
                <Link to="/PFF_2048_Page">
                    <GameCard num="03" title="2048" desc="Pour réviser vos puissances de 2 !" imgsrc={require("./img/2048.png")}></GameCard>
                </Link>
                <Link to="/PFF_Snake">
                    <GameCard num="04" title="Snake" desc="Attention, il mord !" imgsrc={require("./img/snake.jpg")} ></GameCard>
                </Link>
            </div>
        </>
    );
}

export default PFFGames;