
import { PiImagesSquareThin, PiShoppingCartSimpleBold } from "react-icons/pi";
import { SiExcalidraw, SiGoogleclassroom } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
const ContenSection = () => {
    return (
        <div className="flex gap-9 flex-col md:flex-row lg:gap-32 justify-center">
            <div>
            <PiImagesSquareThin className="text-9xl"></PiImagesSquareThin><hr></hr>
            <h2 className="text-center">Current Exhibits</h2>
            </div>
           
           <div>
           <SiExcalidraw className="text-9xl"></SiExcalidraw><hr></hr>
            <h2 className="text-center">Enter Made in California</h2>
           </div>

           <div>
           <GrUserManager className="text-9xl"></GrUserManager><hr className="mt-1"></hr>
            <h2 className="text-center">Membership</h2>
           </div>
            
            <div>
            <SiGoogleclassroom className="text-9xl"></SiGoogleclassroom><hr></hr>
            <h2 className="text-center">Take a Class</h2>
            </div>

         <div>
         <IoLocationOutline className="text-9xl"></IoLocationOutline><hr></hr>
            <h2 className="text-center">Plan a Visit</h2>
         </div>
           
           <div>
           <PiShoppingCartSimpleBold className="text-9xl"></PiShoppingCartSimpleBold><hr></hr>
            <h2 className="text-center">Shop Online</h2>
           </div>
           
         
        </div>
    );
};

export default ContenSection;