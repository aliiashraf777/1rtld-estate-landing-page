import { useState } from "react";
import Heading from "./Heading"
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "f4825b1c-eb9a-40fb-8a92-9a6b56f9e606");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            // alert('Form Submitted Successfully')
            toast.success('Form Submitted Successfully')
            event.target.reset();
        } else {
            console.log('Error', data);
            // alert(data.message)
            toast.error(data.message)
            setResult('');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className='w-full overflow-hidden p-6 py-20 lg:px-32 text-center'
            id='Contact'
        >
            <Heading
                heading='Contact'
                span='With Us'
                para='Ready to Make a Move? Lets Build Your Future Together'
            />

            <form
                onSubmit={onSubmit}
                className='max-w-2xl mx-auto text-gray-600 pt-8'
            >
                <div className='flex flex-wrap md:flex-nowrap'>
                    <div className="w-full md:w-1/2 text-left">
                        Your Name

                        <input
                            type="text"
                            name='Name'
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            placeholder='Your Name'
                            required
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email

                        <input
                            type="email"
                            name='Email'
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            placeholder='Your Email'
                            required
                        />
                    </div>
                </div>

                <div className='my-6 text-left'>
                    Message
                    <textarea
                        name="Message"
                        id=""
                        placeholder='Message'
                        required
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                    >

                    </textarea>
                </div>

                <button
                    className='bg-blue-600 text-white py-2 px-12 mb-10 rounded border border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-500'
                >
                    {result ? result : 'Send Message'}
                </button>
            </form>
        </motion.section>
    )
}

export default Contact
