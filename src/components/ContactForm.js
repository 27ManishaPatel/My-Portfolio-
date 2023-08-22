import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

const ContactForm =() =>{
  const [status, setStatus] = useState("Submit");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, //service_id click on the Email Services link
      process.env.REACT_APP_TEMPLATE_ID, //YOUR_TEMPLATE_ID Email Templates link in your dashboard's side menu and go to the settings tab like so:
      form.current,
      process.env.REACT_APP_USER_ID //YOUR_PUBLIC_KEY in account general
    ).then((result) => {
      console.log(result.text);
    }, (error) =>{
      console.log(error.text);
      alert("FAILED...", error);
    });
    setStatus("Submit");
  
    e.target.reset();
  }

return(
  <section id="contact" className="relative">
  <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        style={{ filter: "opacity(0.7)" }}
        src="https://www.google.com/maps/embed/v1/place?q=Gyngemose+Parkvej,+Søborg,+Denmark&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      />
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-indigo-400">
            Gyngemose Parkvej <br />
            Søborg 2860, 
            Copenhagen, Denmark
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <a href="mailto:manisha270989@gmail.com?body=My custom mail body"
          className="text-indigo-400 leading-relaxed">
            manisha270989@gmail.com
          </a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <a className="leading-relaxed text-indigo-400" href="tel:+4591455877">+45 91455877</a>
        </div>
      </div>
    </div>
    <form ref={form}
      onSubmit={sendEmail}
      name="contact"
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
        Hire Me !
      </h2>
      <p className="leading-relaxed mb-5">
      I want to work as a professional web developer, 
      because I want to make people's lives easier and more interactive by making apps aesthetic, 
      convenient, and user-friendly.
      </p>
      
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder="Full Name" required
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="from_email"
          placeholder="Email ID" required
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="from_message"
          placeholder="Write your message here!" required
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          
        />
      </div>
      <button
        type="submit"
        className="text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        {status}
      </button>
    </form>
  </div>
</section>
)
}
export default ContactForm