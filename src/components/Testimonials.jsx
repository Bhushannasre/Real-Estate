import { assets, testimonialsData } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function Testimonials() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    
    
    className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customers
        <span className="underline underline-offset-4 font-light pl-2">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
        Real stories from those who found their homes with us.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index)=> (
            <div key={index} className=" max-w-[340px] bg-white shadow-lg rounded  px-8 py-12 text-center transform  transition duration-300 ease-in-outhover:-translate-y-2  shadow-2xl">
                <img src={testimonial.image} alt={testimonial.alt} className="w-20 h-20 rounded-full mx-auto mb-4 "/>
                <h2>{testimonial.name}</h2>
                <p>{testimonial.title}</p>
                <div>
                    {Array.from({ length: testimonial.rating },(item, index)=>(
            
                        <img key={index} src={assets.star_icon} alt="star icon" className="inline-block w-5 h-5" />
                    ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  );
}
export default Testimonials;
