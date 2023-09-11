import React from 'react';

export default function Resume(){

	return(
	<>
		<div class="center-items">
            <h1 className="text-5xl font-bold">Resume</h1>
            <h2 className="text-2xl font-bold">Download my <a className="text-white" href="/resume">Resume</a></h2>            
            <h2 className="font-bold">Front-end Proficiencies</h2>    
            <ul className="list-disc">
                <li><a>HTML</a></li>
                <li><a>CSS</a></li>
                <li><a>JavaScript</a></li>
                <li><a>JQuery</a></li>
                <li><a>Responsive Design</a></li>
                <li><a>React</a></li>
                <li><a>Bootstrap</a></li>
            </ul>
            <h2 className="font-bold">Back-end Proficiencies</h2>    
            <ul className="list-disc">
                <li><a>API's</a></li>
                <li><a>Node</a></li>
                <li><a>Express</a></li>
                <li><a>MySQL Sequelize</a></li>
                <li><a>MongoDB, Mongoose</a></li>
                <li><a>REST</a></li>
                <li><a>GraphQL</a></li>
            </ul>
        </div>        
	</>	
	);
}