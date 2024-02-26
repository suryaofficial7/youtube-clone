import React from 'react'
import Slide from './Slide'
import VedioBox from './VedioBox'


const Body = () => {
  return (
    <div className='bg-slate-950 flex w-[100%] text-white'>
    

    <div className="left w-[15%]  pl-6 ">
        <ul className='w-[100%]'>
            <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Home</li></a>

    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Shorts</li></a>
    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Subscrition</li></a>


        </ul>
        <hr className='m-2 pl-0 text-gray-500 bg-gray-300'  />

        <ul className='w-[100%]'>
      

        <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span> </span><li className='ml-4 font-bold text-xl'>You</li></a>

        <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Your Channel</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>History</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Your Videos</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Watch Later</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Show More</li></a>







        </ul>


        <hr className='m-2 pl-0 text-gray-500 bg-gray-300'  />

        <ul className='w-[100%]'>
      

        <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span> </span><li className='ml-4 font-bold text-xl'>You</li></a>

        <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Your Channel</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>History</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Your Videos</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Watch Later</li></a>


    <a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      display="block"
      viewBox="0 0 24 24"
      style={{ width: "25", height: "25" }}
      pointerEvents="none"
      
    >
      <path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg></span><li className='ml-4'>Show More</li></a>







        </ul>

        <hr className='m-2 pl-0 text-gray-500 bg-gray-300'  />

<ul className='w-[100%]'>


<a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span> </span><li className='ml-4 font-bold text-xl'>You</li></a>

<a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
display="block"
viewBox="0 0 24 24"
style={{ width: "25", height: "25" }}
pointerEvents="none"

>
<path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
</svg></span><li className='ml-4'>Your Channel</li></a>


<a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
display="block"
viewBox="0 0 24 24"
style={{ width: "25", height: "25" }}
pointerEvents="none"

>
<path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
</svg></span><li className='ml-4'>History</li></a>


<a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
display="block"
viewBox="0 0 24 24"
style={{ width: "25", height: "25" }}
pointerEvents="none"

>
<path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
</svg></span><li className='ml-4'>Your Videos</li></a>


<a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
display="block"
viewBox="0 0 24 24"
style={{ width: "25", height: "25" }}
pointerEvents="none"

>
<path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
</svg></span><li className='ml-4'>Watch Later</li></a>


<a className='flex p-2 hover:bg-gray-500 rounded-lg' href=""><span>   <svg className='text-white'
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
display="block"
viewBox="0 0 24 24"
style={{ width: "25", height: "25" }}
pointerEvents="none"

>
<path fill='white' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
</svg></span><li className='ml-4'>Show More</li></a>







</ul>
    </div>
    <div className="rigth">

      <Slide/>


<div className="mainBox flex flex-wrap justify-center">

  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/5q9uLOJaO24/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJEYx-tSiO6Ts7sEu5Hj-P2bRfJA" view="12.1M" name="@Tamil-Media" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/-s27asxWaTc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA90OuW7Rp9KLOILeZ2E85oVGpOVQ" view="111k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/IHIJCIurZ18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuloSGs2VKH4Nuv8cdg0G3mHu_CQ" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i2.ytimg.com/vi/APpixjqSUAg/0.jpg" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/liuOceaNTgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBKwbyv5f4RRNmxqIX9wpDG7Zi7Q" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/JmCWpO2QXFo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IFkoEzAP&rs=AOn4CLDWozpVeqUmi7SGT1d6UqFT0qkBpA" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/5q9uLOJaO24/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJEYx-tSiO6Ts7sEu5Hj-P2bRfJA" view="12.1M" name="@Tamil-Media" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/-s27asxWaTc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA90OuW7Rp9KLOILeZ2E85oVGpOVQ" view="111k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i2.ytimg.com/vi/APpixjqSUAg/0.jpg" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/liuOceaNTgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBKwbyv5f4RRNmxqIX9wpDG7Zi7Q" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/5q9uLOJaO24/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJEYx-tSiO6Ts7sEu5Hj-P2bRfJA" view="12.1M" name="@Tamil-Media" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/5tFUCCfIvpg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMrYRT0OidOSIAYhvRxhQETTWTXg" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/JmCWpO2QXFo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IFkoEzAP&rs=AOn4CLDWozpVeqUmi7SGT1d6UqFT0qkBpA" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/5q9uLOJaO24/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJEYx-tSiO6Ts7sEu5Hj-P2bRfJA" view="12.1M" name="@Tamil-Media" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/-s27asxWaTc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA90OuW7Rp9KLOILeZ2E85oVGpOVQ" view="111k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/IHIJCIurZ18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuloSGs2VKH4Nuv8cdg0G3mHu_CQ" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/gTIHEgfxCvs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHZ9shSIlUd9wXU37DRuDxkg2l-Q" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/IHIJCIurZ18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuloSGs2VKH4Nuv8cdg0G3mHu_CQ" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/pU2Aqh7ThkQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLATVmr5sBdITmVuDXlYb5VGqneOlg" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/A04WawrDblo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBh_wQng8eW7OjvmLcXDUKASLghIA" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/h5mdJ4qwlHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHdVc71cNkgajU1UWbdLW0rlQbJg" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong " link="https://i.ytimg.com/vi/-s27asxWaTc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA90OuW7Rp9KLOILeZ2E85oVGpOVQ" view="111k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/axxBO1SDY1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIglGy-fq1qA1Gex2FxncQYedt_g" view="901k" name="@trogrammer" date="2 month Ago"/>
  <VedioBox  title="Surya - best song Munbe Vaa En anbe Vaa Varanam Aayiram 2008 #tamilSong "  link="https://i.ytimg.com/vi/MlgYIWei9SY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCht3Nspp8jtEdHOxd9MgJ5mzVbrw" view="901k" name="@trogrammer" date="2 month Ago"/>


</div>



    </div>
    </div>
  )
}

export default Body