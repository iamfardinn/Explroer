import { useState } from 'react';
import './Country.css'


const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country;
const [visited,setVisited] = useState(false);

const handleVisited =() =>{
    setVisited(!visited);
}



    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited ? 'purple' : 'white'}}>Name :{name.common}</h3>
            <img src={flags.png} alt="" />
              <p>Population :{population}</p>
              <p>Area :{area}</p>
              <p>Code :{cca3}</p>
              <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
              <br />

              <button onClick={() =>handleVisitedFlags(country.flags.png)}>Flag</button>
              <button onClick={handleVisited} className=''>{visited? 'Been there' : 'Never Been there'}</button>

           
        </div>
    );
};

export default Country;