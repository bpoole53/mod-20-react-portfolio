import React from 'react';

export default function Resume(){

	return(
	<>
		<div class="center-items">
            <h1 className="text-5xl font-bold">Resume</h1>
            <h2 className="text-2xl font-bold">Download my <a className="text-white" href="/resume">Resume</a></h2>            
            <h2 className="font-bold">Front-end Proficiencies</h2>    
            <ul className="list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2 className="font-bold">Back-end Proficiencies</h2>    
            <ul className="list-disc">
                <li>API's</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>        
	</>	
	);
}