
import AddSection from '../component/AddSection/AddSection';
import AddSectionCard from '../component/AddSection/AddSectionCard';
import ContenSection from '../component/ContenSection/ContenSection';
import Banner from '../component/Header/Banner';

import { useLoaderData } from "react-router-dom";



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
        </div>
           
        </div>
    );
};

export default HomePage;