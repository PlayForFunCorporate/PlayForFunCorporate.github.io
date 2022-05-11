import './GameCard.css';

function GameCard(props)
{
    return (
        <>
            <div id={"GameCard"+props.num} className="GameCard">
                <p>{props.num}</p>
                <hr/>
                <p className="title">{props.title}</p>
                <label>{props.desc}</label>
                <img src={props.imgsrc}></img>
            </div>
        </>
    );
}

export default GameCard;