import React from 'react';

export default function Navbar() {

  return (
    <div className="navbar bg-base-200">
    <div className="navbar-start">
      <a className="btn btn-ghost normal-case text-xl" href="/">Ben Poole</a>
    </div>
    <div className="navbar-end">
      <a className="btn" href="/about">About Me</a>
      <a className="btn" href="/contact">Contact</a>
      <a className="btn" href="/portfolio">Portfolio</a>
      <a className="btn" href="/resume">Resume</a>
    </div>
   </div>
  )
}