import '../css/factsBlock.css';
import FactsBlockHeader from './FactsBlockHeader';
import FactsBlockBody from "./FactsBlockBody";

function factsBlock() {
    return(
        <div className='factsBlock'>
            
           <FactsBlockHeader />
           <FactsBlockBody/>         

        </div>
    );
    
}

export default factsBlock;