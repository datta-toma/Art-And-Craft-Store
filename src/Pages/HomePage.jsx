
import AddSection from '../component/AddSection/AddSection';
import ContenSection from '../component/ContenSection/ContenSection';
import Banner from '../component/Header/Banner';

import { useLoaderData } from "react-router-dom";
import AboutUs from './AboutUs';
import ArtCraftSection from '../component/ArtCraftSection/ArtCraftSection';
import ContactUs from './ContactUs';



const HomePage = () => {
    const data = useLoaderData();
    
    return (
        <div>
           <div className="space-y-10"> 
            <Banner />
            <ContenSection />
        
          <AddSection crafts={data}> </AddSection>
       
          <ArtCraftSection crafts={data}> </ArtCraftSection>
        
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
        </div>
           
        </div>
    );
};

export default HomePage;