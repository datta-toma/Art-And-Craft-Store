import img from '../assets/map.png';
import { IoLocationOutline,  IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { SlClock } from "react-icons/sl";


const ContactUs = () => {
    return (
        <div>
            <h1 className="text-5xl font-extrabold text-center mt-12">Contact Us</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-28 lg:ml-32">
                    <img src={img} className="max-w-sm md:h-96 rounded-lg shadow-2xl" />
                    <div className='space-y-5'>
                        <div className='flex gap-5'>
                        <div>
                            <IoLocationOutline className='text-3xl text-yellow-500'></IoLocationOutline>
                        </div>
                        <div>
                            <h2>Our Office Address</h2>
                            <p>Palm Court Bldg M, 501/3, 5th Floor, New Link Road, Beside<br></br> Goregaon Sport Compkex, Malad wast, Mumbai, Maharashtra 400064</p>
                        </div>
                        </div>

                        <div className='flex gap-5'>
                            <div>
                            <MdOutlineMail className='text-3xl text-yellow-500'></MdOutlineMail>
                            </div>

                            <div>
                                <h2>General Enquiries</h2>
                                <p>websupport@justdial.com</p>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div>
                                <IoCallOutline className='text-3xl text-yellow-500'></IoCallOutline>
                            </div>

                            <div>
                                <h2>Call Us</h2>
                                <p> +918888888888</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <SlClock className='text-3xl text-yellow-500'></SlClock>
                            </div>

                            <div>
                                <h2>Our Timing </h2>
                                <p>Mon-Sun: 10:100AM - 07:00PM</p>
                            </div>
                        </div>    
                    
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ContactUs;