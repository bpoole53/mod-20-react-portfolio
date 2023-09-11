import React from 'react';

export default function Project() {

  return (
    <>
        <div className="flex items-center justify-center">
            <h1 className="text-5xl font-bold">Projects</h1>
        </div>
        <div class="project-image">
            <div className="relative group">
            <img src="https://i.ibb.co/gF7vJ5Y/project-image-2.jpg" alt='' className="h-48 w-56 rounded-lg shadow-2xl" />
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-75 text-white">
                <a href="https://bpoole53-express-note-taker-c90d46568fe0.herokuapp.com/">Note Taker</a>
                <a href="https://github.com/bpoole53/mod-11-express-notes"><svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="white">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>f</a>
            </div>
            </div>
            <div className="relative group">
            <img src="https://i.ibb.co/gy87db1/project-image-1.jpg" alt='' className="h-48 w-56 rounded-lg shadow-2xl" />
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-75 text-white">
                <p>Employee Manager</p>
                <a href="https://github.com/bpoole53/mod-12-employee-manager"><svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="white">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>f</a>
            </div>
            </div>            
        </div>          
    </>
  )
}

