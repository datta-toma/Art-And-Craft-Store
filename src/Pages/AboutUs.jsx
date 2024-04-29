import img from'../assets/painting.jpeg';
import { Rotate, Roll } from "react-awesome-reveal";

const AboutUs = () => {
    return (
        <div>
            <Rotate>
            <h2 className="text-5xl font-extrabold text-center">About Us</h2>
            </Rotate>
           <div className="hero  mt-16">
                <div className="hero-content flex-col lg:flex-row  gap-10">
                   <Roll>
                   <img  src={img} className="max-w-sm  rounded-lg shadow-2xl lg:ml-28" />
                   </Roll>
                    <div>
                    <Roll>
                    <p className="py-6 font-medium">We, Venus Art Gallary at Malad West in Mumbai, Maharashtra, have formed with the intention of expanding the market for new forms of art paintings that are produced cost-effectively to  all our clientele.We have teamed up with leading artists having a steep inclination in art to do our best & serve eye-warming paintings to our valued coustomers spread throughout the world. Our customer's growing faith and confidence in us is our most valued possession.</p>
                    </Roll>
                    </div>
                </div>
                </div> 
        </div>
    );
};

export default AboutUs;