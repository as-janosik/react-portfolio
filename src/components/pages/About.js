import React from 'react';
import profileImg from '../images/profile_pic.png';

export default function About() {
  return (
    <div class="container">
      <h1>About Page</h1>
      <p>
        Hello, My name is Andrew Janosik.  I started my software development journey back in 2015.  I went to NorthEast Wisconsin Technical College and recieved an associates degree in Software Development.
        While still in school I was hired into my first developer positon working with MSSQL and C# for a ATM company.  I learned a lot about automation and reverse engineering while there.
        My second job was related to a SAAS called Workday.  This is a HCM program which is widely used by many companies, both big and small.  I worked on the integrations team learning about EDI, HR, Payroll and many other usefull skills. 
        Workday mainly consisted of XSLT, JSON and some Java on the more complicated Studio integrations.  It is a very unique system which requires a knowledge of HR and programming logic. 
        Recently I have been working for Kohls as their Site Reliability Engineer for Workday and other HR systems.  I have been able to work in Javascript, Java, sql, and python.
        As the SRE for my area I am proud to produce dashboards, automations and reverse engineer products that need to be monitored. I have really enjoyed this position.  Recently I have added another product to monitor
        which used the MERN stack.  The Full Stack Bootcamp by University of Minnesota has allowed me to take on this new responsibility by being able to support this product with monitoring and colaboration with that product team. 
      </p>
      <img src={profileImg} alt="Author-Andrew Janosik"/>
    </div>
  );
}
