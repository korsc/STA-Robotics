import './contact.css'
const Contact: React.FC=()=>{
    return(

<>
<section id='contact' className="page-wrapper relative">
    <h3 className='flex justify-center font-Khula text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mobile:text-center mobile:'>
    Contact Us
    </h3>
    <p className="flex justify-center font-semibold text-center">Have questions? Want to support us? Contact any of the following emails or use the form below!</p>
    <div className="grid gap-y-2 mt-[2%] justify-center">
  <div className="mobile:mt-[4%] border-black border-2 bg-gradient-to-b from-red-500 via-red-600 to-red-700 h-24 rounded-2xl text-black md:px-80 font-semibold hover:opacity-90 cursor-pointer" onClick={() => window.open('mailto:smcintosh@ldcsb.ca', '_blank')}>
    <p className="text-center w-full mt-[4%] text-2xl">Shawn McIntosh</p>
    <div className="text-center text-white text-md">smcintosh@ldcsb.ca</div>
  </div>
  <div className="border-black border-2 bg-gradient-to-b from-red-500 via-red-600 to-red-700 h-24 rounded-2xl text-black md:px-80 font-semibold hover:opacity-90 cursor-pointer" onClick={() => window.open('mailto:igee@ldcsb.ca', '_blank')}> 
    <p className="text-center w-full mt-[4%] text-2xl">Ian Gee</p>
    <div className="text-center text-white text-md hover:underline">igee@ldcsb.ca</div>
  </div>
  <div className="border-black border-2 bg-gradient-to-b from-red-500 via-red-600 to-red-700 h-24 rounded-2xl text-black mobile:px-16 md:px-80 font-semibold hover:opacity-90 cursor-pointer" onClick={() => window.open('mailto:apellerin@ldcsb.ca', '_blank')}>
    <p className="text-center w-full mt-[4%] text-2xl">Aaron Pellerin</p>
    <div className="text-center text-white text-md">apellerin@ldcsb.ca</div>
  </div>
</div>


  <div className="contact-box md:mt-[3%]">
    
  </div>
  <div className="contact-form-wrapper">
    
    <h2 className='flex justify-center relative contact-title mobile:text-sm'>Contact Form</h2>
    <form>
      <div className="form-item p-2">
        <input type="text" name="sender" required />
        <label>Name:</label>
      </div>
      <div className="form-item p-2">
        <input type="text" name="email" required />
        <label>Email:</label>
      </div>
      <div className="form-item p-2">
        <input type="text" name="phone" required />
        <label>Phone:</label>
      </div>
      <div className="form-item p-2">
        <input type="text" name="address" required />
        <label>Address:</label>
      </div>
      <div className="form-item p-2">
        <input type="text" name="subject" required />
        <label>Subject:</label>
      </div>
      <div className="form-item p-2">
        <textarea className="" name="message" required defaultValue={""} />
        <label>Message:</label>
      </div>
      <button className="submit-btn">Send</button>
    </form>
  </div>






</section>
</>
    
    );
};

export default Contact;