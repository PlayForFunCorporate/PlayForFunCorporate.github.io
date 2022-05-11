import "./PFFPresentation.css";

function PFFPresentation(){
    return(
        <>
            <div id="PFFPresentation">
                <div id="PFFPresentation_Img">
                    <img src={require('./img/controller.png')} alt="controller"></img>
                </div>
                <div id="PFFPresentation_Txt">
                    <p className="title">PlayForFun</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Minima natus consequatur mollitia exercitationem ratione illo minus eaque quas, 
                        molestiae amet architecto ex incidunt facilis quibusdam impedit temporibus dolorem ducimus distinctio.</p>
                </div>
            </div>
        </>
    );
}

export default PFFPresentation;