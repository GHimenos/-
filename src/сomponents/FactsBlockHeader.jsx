import '../css/factsBlock-header.css';
import icon from  '../img/reactjs-iconReactIcon.svg';

function FactsBlockHeader(){

    return(

        <div className="factsBlock_header">
            <img src={icon} alt="" />
            <p>ReactFacts</p>

        </div>

    );

}

export default(FactsBlockHeader);