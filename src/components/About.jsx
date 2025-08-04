import { assets } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

function About() {
    return (
        <motion.div 
           initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
         className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
            <h1 className="text-4xl sm:text-4xl font-bold mb-2">
                About <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span>
            </h1>

            <p className="text-gray-500 max-w-md text-center mb-8">
                Passionate About Properties, Dedicated to your vision
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
                
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p className="text-gray-500">Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">12+</p>
                            <p className="text-gray-500">Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">20+</p>
                            <p className="text-gray-500">Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">25+</p>
                            <p className="text-gray-500">Ongoing Projects</p>
                        </div>
                    </div>
                    <p className="text-gray-500 mt-10 max-w-md text-center md:text-left">
                        We are a leading real estate company with over a decade of experience in delivering exceptional properties. Our commitment to quality and customer satisfaction has made us a trusted name in the industry. We take pride in our diverse portfolio, which includes residential, commercial, and mixed-use developments. Our team of experts is dedicated to bringing your vision to life, ensuring that every project meets the highest standards of excellence.
                    </p> 
                    
                        <button className="bg-blue-600 px-8 py-2 text-white rounded mt-3 cursor-pointer hover:bg-green-600">Learn More</button>     
                        
                       
                </div>
            </div>
        </motion.div>
    );
}

export default About;
