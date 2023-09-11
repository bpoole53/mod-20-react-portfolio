import React from 'react';

export default function Contact(){

	return(
	<>    
        <div class="center-items">
            <h1 className="text-5xl font-bold">Contact Me</h1>  
            <input class="contact-input" type="text" placeholder="Name" className="input input-bordered w-full max-w-md text-white" />
            <input class="contact-input" type="text" placeholder="Email Address" className="input input-bordered w-full max-w-md text-white" />
            <textarea class="contact-input" type="text" placeholder="Message" className="input input-bordered w-full max-w-md h-36 text-white pb-4"></textarea>
            <input type="submit" value="Submit" className="btn searchBtn" />
        </div>
	</>	
	);
}