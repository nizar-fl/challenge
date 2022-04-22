import './Componentscss.css';
import sideviddata from './../Data';


function Sidebar(){
    return(
        
        
        
        
        
        <div className='sidebarbox'>
            {sideviddata.map((object) => 
                <div className='eachbox'>
                    <img className='sideboximg' style={{width:"185px"}} src={object.vidlink}></img>
                    <div>
                        <p className='eachboxtitle'>{object.vidtitle}</p>
                        <p className='eachboxchannel'>{object.vidchannel}</p>
                        <p className='eachboxviews'> {object.vidviwesanddate}</p>
                    </div>  
                </div>              
            )}
 
        </div>
    );
    
}
export default Sidebar