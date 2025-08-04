import React from 'react';
import { toast } from 'react-toastify';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
function Contact(){
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b0f78e42-7031-47dd-b60d-3434cd0fab2e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult();
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
        toast.error("Failed to send message. Please try again.");
    }
  };
    return(
        <motion.div 
           initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
        
        className="text-center p-6 py-20 lg:px-32 overflow-hidden" id="Contact">
           <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact 
        <span className="underline underline-offset-4 font-light pl-2">With Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
        Ready to find your dream home? Get in touch with us today!
      </p>
              <form onSubmit={onSubmit} className="max-w-md mx-auto">
                 <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded" required />
                 <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded" required />
                 <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded h-32" required></textarea>
                 <button type="submit" className="bg-blue-600 px-8 py-2 text-white rounded cursor-pointer hover:bg-green-600">{result ? result: "Send Message"}</button>
              </form>
        </motion.div>
    )
}
export default Contact;