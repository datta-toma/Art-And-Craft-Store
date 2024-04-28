
import AddSection from '../component/AddSection/AddSection';
import ContenSection from '../component/ContenSection/ContenSection';
import Banner from '../component/Header/Banner';

import { useLoaderData } from "react-router-dom";
import AboutUs from './AboutUs';
import ArtCraftSection from '../component/ArtCraftSection/ArtCraftSection';



const HomePage = () => {
    const data = useLoaderData();
    
    return (
        <div>
           <div className="space-y-10"> 
            <Banner />
            <ContenSection />
           {data ? ( 
          <AddSection crafts={data} /> 
        ) : (
          <p>Loading</p> 
        )}

        {data ? ( 
          <ArtCraftSection crafts={data} /> 
        ) : (
          <p>Loading</p> 
        )}
        
        <AboutUs></AboutUs>
        </div>
           
        </div>
    );
};

export default HomePage;