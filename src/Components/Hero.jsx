import React from 'react';
import yt from  "../assets/yt.jpg"
import ham from  "../assets/ham.jpg"


const Hero = () => {
  return (

< >
<nav className='bg-slate-950 text-white flex p-4 justify-between z-10  '>



<div className='flex '> <span><img className='mt-2.5' width={40} src={ham} alt="" /></span> <span><img className='ml-4' width={130} src={yt} alt="" /></span> </div>

<div className='flex '>

<input type="text" className='bg-slate-800 rounded-l-3xl pl-3 focus:border-none ' style={{}} />
<button className=' p-2 rounded-r-3xl bg-slate-700 '>search</button>
<button className='bg-slate-950 p-2.5 mx-2 rounded-3xl hover:bg-slate-700'>Mic</button>
</div>


<div className="flex">
    <button className='bg-slate-950 p-2 mx-2 rounded-3xl hover:bg-slate-700'>Live</button>
    <button className='bg-slate-950 p-2 mx-2 rounded-3xl hover:bg-slate-700'>Noti</button>
    <button className='bg-slate-950 p-2 mx-2 rounded-3xl hover:bg-slate-700 overflow-hidden'><img className='rounded-3xl' width={30} src="https://yt3.ggpht.com/GJOOB6UNq23Zlcgh4llwABGggnHEQzMmfGqKq3JkahuEBaoCVQsbgLSsGmLP6ZDDu_A-vbYKuQ=s88-c-k-c0x00ffffff-no-rj" alt="I" /></button>

</div>
</nav>
</>
  
  )
}

export default Hero