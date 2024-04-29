
import { PiImagesSquareThin, PiShoppingCartSimpleBold } from "react-icons/pi";
import { SiExcalidraw, SiGoogleclassroom } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { Rotate } from "react-awesome-reveal";

const ContenSection = () => {
    return (
        <div className="flex gap-9 flex-col md:flex-row lg:gap-32 justify-center">
             <Rotate>
                <div>
                    <PiImagesSquareThin className="text-9xl" />
                    <hr />
                    <h2 className="text-center">Current Exhibits</h2>
                </div>
            </Rotate>
          
            <Rotate>
                <div>
                    <SiExcalidraw className="text-9xl" />
                    <hr />
                    <h2 className="text-center">Enter Made in California</h2>
                </div>
            </Rotate>

            <Rotate>
                <div>
                    <GrUserManager className="text-9xl" />
                    <hr className="mt-1" />
                    <h2 className="text-center">Membership</h2>
                </div>
            </Rotate>
            
            <Rotate>
                <div>
                    <SiGoogleclassroom className="text-9xl" />
                    <hr />
                    <h2 className="text-center">Take a Class</h2>
                </div>
            </Rotate>

            <Rotate>
                <div>
                    <IoLocationOutline className="text-9xl" />
                    <hr />
                    <h2 className="text-center">Plan a Visit</h2>
                </div>
            </Rotate>
           
            <Rotate>
                <div>
                    <PiShoppingCartSimpleBold className="text-9xl" />
                    <hr />
                    <h2 className="text-center">Shop Online</h2>
                </div>
            </Rotate>
           
         
        </div>
    );
};

export default ContenSection;