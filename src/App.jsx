import React from 'react';
import { Icon } from '@iconify/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from './assets/foodi-logo.png';
import main_img from './assets/main-image.png';

const App = () => {
  return (
    <div className="bg-[#f1f1f1]">
    <div className='m-0 p-0 box-border max-w-7xl mx-auto'>
      <header>

        <nav className='flex justify-between items-center'>
          
        <img src={logo} alt="Logo" />

        <ul className='flex gap-10 text-[#333] font-semibold'>
          <li className='hover:text-[#28d146] cursor-pointer transition-colors'>Home</li>
          <li className='hover:text-[#28d146] cursor-pointer transition-colors'>Menu</li>
          <li className='hover:text-[#28d146] cursor-pointer transition-colors'>Servisec</li>
          <li className='hover:text-[#28d146] cursor-pointer transition-colors'>Offers</li>
        </ul>

        <button className='bg-[#28d146] text-white px-5 py-2 rounded-full flex items-center gap-2'>Contact</button>

        </nav>

      </header>

      <main className='flex justify-between items-center mt-7'>

        <div className="">
                <h1 className='text-4xl font-bold'>Dive into Delights <br /> Of Delectable <span className='text-[#28d146]'>Food</span></h1>
                <p className='text-[rgba(74,74,74,1)] mt-5 mb-5'>Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship</p>
            <div className="flex justify-around items-center ">
                  <button className='bg-[#28d146] text-white px-5 py-2 rounded-full flex items-center gap-2'>Order Now</button>
                  <h1 className='text-[#333] font-bold cursor-pointer'>Watch Video</h1>
            </div>
            
        </div>

        <div className="">
        <img className='w-[800px] h-auto' src="https://s3-alpha-sig.figma.com/img/274f/bc24/c74d318156023a0fe71cf0dab4009ace?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OOq~kaIn1qb5Rw2GF6vjKkcRqSMC5RpBaYDDqIc-8O-eADM8m9SVbzRiozlM5AImNPIb8U4TpcVAilgdZS6fTjCGLFWs4s0htDFO-s5Mfy2YJnUF1TYBYEiJMmbF9Xa1rQW~GGiklWSEYNEGqL7744Off0kYYGWMqkFgVo0gYsUhIxSP6ohMMOOOjstxIcRE7f1d8jCM1-bRPA-TJtqJmzutdJIomEAjuMqgoIqIqQf1hGYm9qvSxT~~EKCG8~lnnnxiqYuFAvb7iHC9p90kjRVATfm-3L5Z29VZDHfSoWqMO65F-3xjMrFKI8l3TfkZA0dBFuFZVQqQ0RdIDkcrYQ__" alt="Ovqat rasmlari" />
        </div>
        
      </main>

      <div className="flex justify-center items-center flex-col">
        <p className='text-[rgba(255,104,104,1)] font-bold '>Customer Favorites</p>
        <h1 className='text-black font-bold text-4xl'>Popular Categories</h1>
      </div>

      <div className='flex justify-around items-center mt-10'>
        <div className='bg-white shadow-2xl rounded-3xl w-72 h-72 flex justify-center items-center flex-col'>
          <div className='bg-[rgba(193,241,198,1)]  rounded-full flex justify-center items-center'>
            <img className='w-40 h-36 mr-2.5 ' src="https://s3-alpha-sig.figma.com/img/e86f/35a4/f2648ec1cc19cd09ba4a72b5f4a76a2f?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aE6KsvbN2ePlBAnZJ-2fv~UAD3mAPKbMnEyVz7MH3-qnOL6HlCduIPG6NuKDJlOsi3WF1gzAZqvRhUr78G3KoIcmc5ZAt5TyasyWJiDx0kzN2xArEVhmlCyT9DvAz~beS2fNpL~VF-25xuEwQVkWBWIG7RMY~BrorQ3DAEolR7Nxh6QVEnYLY8CFeQq7jrfdUWBZFp7YwUowsfgiMg3viEQq9wMWd2oxgD0aQDglT7nsAhKUUXyCahe3N7XRJn7aSF0O4yYoDagYAR3I4JYtvOyh8I94pF4Umr4RhRG3s5OJGWRXZI6v2Jg6rMhGi9eDmablbNAjq6wNgWj6bOJvog__" alt="" />
          </div>
          <h1 className='text-black font-bold text-2xl'>Main Dish</h1> 
          <p className='text-[rgba(74,74,74,1)]'>(86 dishes)</p>
        </div>

        <div className='bg-white shadow-2xl rounded-3xl w-72 h-72 flex justify-center items-center flex-col'>
          <div className='bg-[rgba(193,241,198,1)]  rounded-full flex justify-center items-center'>
            <img className='w-40 h-36 mr-2.5 ' src="https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fqNlhDJ1LZmj8W7VexPzL8zz99bWmjhMRT3kfzMC0TpQuL0EaXgDVfudXHCsFazWUtoJ1L0ftnmRuThfDuvDe6w4eYuAjGadtP7sNeJX4u6iLmpv01sopLRf0egN~ObTj1wwf9nLmsDT1Td-wr78bubJJG~4vIxyOLUwDRVPhcudRdOD~DdTOS8W5ZI3nPjg4qVQwjDecgzVaeeNLK79xJle8Q62Z4JYEeC~eibu2641IC0HupasOAZsAlCdowk9zWKHhgkFQix~pgkos1C3TREj7u-K7YEa72eG6iDORFqB0hhEp5kAVqphFKBa4tiLBRd90hszPppL4-CnLZ5x7A__" alt="" />
          </div>
          <h1 className='text-black font-bold text-2xl'>Break Fast</h1> 
          <p className='text-[rgba(74,74,74,1)]'>(12 break fast)</p>
        </div>

        <div className='bg-white shadow-2xl rounded-3xl w-72 h-72 flex justify-center items-center flex-col'>
          <div className='bg-[rgba(193,241,198,1)]  rounded-full flex justify-center items-center'>
            <img className='w-40 h-36 mr-2.5 ' src="https://s3-alpha-sig.figma.com/img/cd96/980b/00a7e066cf0ba10fb8fcd8d7604eb761?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GgaPIvvdKdpkeaA5AJfwErU8llTujS~wG9UiQCffkDjXZ-dTmp4s6PedzahsqHBs7w8tgtEmPrdhBALumAP5ibkrAgvMKoRfpsEp4bV0YaPg8hhoscwdSeQ5Q86VLGqV7xKg-eT3jmGn7b1M1TfEFrihk7hyWFBlKKfVBWn2Kyej6sDSa~MZToRw13rAjbUm1ySMqvp~KW4KAVeTG1bfG3~4HHTBfjGKLGpd8XRPdqh9kyqRtQIhGULHbM0qBkY9QeB8l7PxvTH-HIsVu4qxJov8thRLljU1tWDa1276Yrnc7ofWheR6V4bg6FE9kTaZ1w-jNTaykFy6SihI~pAfgQ__" alt="" />
          </div>
          <h1 className='text-black font-bold text-2xl'>Dessert</h1> 
          <p className='text-[rgba(74,74,74,1)]'>(48 dessert)</p>
        </div>

        <div className='bg-white shadow-2xl rounded-3xl w-72 h-72 flex justify-center items-center flex-col'>
          <div className='bg-[rgba(193,241,198,1)]  rounded-full flex justify-center items-center'>
            <img className='w-40 h-36 mr-2.5 ' src="https://s3-alpha-sig.figma.com/img/6b05/0fed/66e0e5da0f9f7eab54d2ff4a36225a83?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=llOyy~cYy6LY4EmfiiIJlZOTMr49fJkFmBQ1rDiddxlfmkR4SbyqzNBjdoJKRHF9g7zDiZSSWoMiZUr0lElVV2gZd4w8PT2-y7MIO41rq-rEPga2yuomDYV53Sc334jmdpn8A2EMFHVdps7f-YtgcwC52ndXYnrXIHh-Bf7HFiwS2E8je~XcDdpDSSIJAzjCe4uj~64GA7IIkRTfwHPskKQt7~feOsVSVu7jbDyZTGfH1OctKrr54-D9MGHNpgyO3iLj76-ERQKZkNNfJLBQnsUHwkMx2-qNamgG2huZLncB9VB2VtAYy6l8F~OYIfI0LdWWCz7ksJ88eWunNRUNcg__" alt="" />
          </div>
          <h1 className='text-black font-bold text-2xl'>Browse All</h1> 
          <p className='text-[rgba(74,74,74,1)]'>(255 Items)</p>
        </div>
      </div>
      
      <div className="">
        <p className='text-start text-2xl mt-8 text-[rgba(255,104,104,1)]'>Special Dishes</p>
        <div className="flex justify-between items-center">

        <h1 className='text-start font-bold text-5xl'>Standout Dishes <br /> From Our Menu</h1>

        <div className="flex gap-5">
          <button className='bg-[rgba(239,239,239,1)] p-4 rounded-[50%] text-[rgba(111,110,110,1)]'> <FaArrowLeft /> </button>

          <button className='bg-[rgba(57,219,74,1)] p-4 rounded-[50%] text-white'> <FaArrowRight /> </button>
        </div>

        </div>
      </div>

      <div className="flex justify-around items-center mt-28">

      <div class="w-[380px] h-[420px] bg-white shadow-2xl rounded-[30px] p-[20px]">
        <img className='w-[280px] h-auto ml-[28px]' src="https://s3-alpha-sig.figma.com/img/c63c/1ab0/6b87da252d0637f480fe9e0485c5a3ef?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SOzTbNNMsj4jfkF3Kod6YD5oYQ7gIXJjf5epP8aYibXMzhi1UYHgKehM8ki-yw-qSIYnhstWbXNnz~mn0gphqNFQZA1FERa51F9J2kQh1QrL~lR0vVwE7746sZOU455ZM-xeU~WTZNdnIHGJJ3QJ~hw~M4cT3CT1lUPQLhTJE6M88j~LStQzwPsDLA8QwtGTrRcM3BoofBZLYa-vCSBxHIlZd~CXfKISOM-iRNmB2E5jCi6bwIsu4C9SlSJqlLUxjCt7aQRkeGUkzpeTOC3d-fRSWMwamBAYvDB61TB~ng6jd0JrsFSr7DFfOE5NFGV0fFBlVTMTACWhXTlun-1SJg__" alt="" />

        <h2 className='font-bold text-[25px]'>Fattoush salad</h2>
        <p className='text-[rgba(85,85,85,1)] font-[600] text-[20px]'>Description of the item</p>
        <div className="flex justify-between items-center">
          <p className='text-[rgba(255,104,104,1)] font-bold text-[22px]'>$<span className='font-bold text-black text-[22px]'>24.00</span></p>
          4.9
        </div>
      </div>

      <div class="w-[380px] h-[420px] bg-white shadow-2xl rounded-[30px] p-[20px]">
        <img className='w-[280px] h-auto ml-[28px]' src="https://s3-alpha-sig.figma.com/img/6701/42ad/7e70ee8eec6a4308bddb455ca1200e6d?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JfDFoRIsAin-xqt3cqctpaGJcU3cnID9YSMfz4mw0b-zBOpEOm5t8y7SL50jlCQJfDEtOem~yAdI6Q6XsbzXr09rwHFphES0NQmhW61grnnI4WH5uD~JqK5lzK4E3spwRrDioMVezK3Ongx6Fkbpw5XTcDtjkaVZrzRIyb89KXD6ZjrIAN9srWko-0iIQec7rUtZ~VWQQFv1C9N9JlyM8d4EtZr3Vmw2X4JuS7mwIRyabZPSwnMxYCGIzlA5n3K1QjWL8yQB-edcjImH4UWALxESPBT~TYuiwr8Ontl~zOiLN37t1ido0ZMy9D6n2ERgmcfvIP0GOWwx1jwPTbxQ-Q__" alt="" />

        <h2 className='font-bold text-[25px]'>Vegetable salad</h2>
        <p className='text-[rgba(85,85,85,1)] font-[600] text-[20px]'>Description of the item</p>
        <div className="flex justify-between items-center">
          <p className='text-[rgba(255,104,104,1)] font-bold text-[22px]'>$<span className='font-bold text-black text-[22px]'>26.00</span></p>
          4.6
        </div>
      </div>

      <div class="w-[380px] h-[420px] bg-white shadow-2xl rounded-[30px] p-[20px]">
        <img className='w-[280px] h-auto ml-[28px]' src="https://s3-alpha-sig.figma.com/img/e5f6/6399/92cb147d6be498d52028200fb734a790?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pNfd6l93OrJGXBzd~I3GqWkTe7TVVC3rvc-E2xRs9gxY0~wBzjxP81F7c4qseVridRSwXo649SmIfhoNv6h-~mq~QkEw1fmnL589KPk-jKjb6Kgpdpm~I8U9eyEy1nW3J5XPAXCiMG8SOOA4isED9LGj3JZgwELf4qRIxJVaOA0l6BkPhygvlXwbqYPVqFX4XzcZguKd6bswQgKXv9XalAndn6Rd58mpOoyucZ0lH0vgi4i7FQ1vnxOpvRz3VI04iuYUqYxf9i-qjY-QRPJ1PpVykCMHWGmB0~Jhvsi9PvizpCZvkUfchSMnSFybiAUNzT8WFUHMXYCZ6Vuipo4z1A__" alt="" />

        <h2 className='font-bold text-[25px]'>Egg vegi salad</h2>
        <p className='text-[rgba(85,85,85,1)] font-[600] text-[20px]'>Description of the item</p>
        <div className="flex justify-between items-center">
          <p className='text-[rgba(255,104,104,1)] font-bold text-[22px]'>$<span className='font-bold text-black text-[22px]'>23.00</span></p>
          4.5
        </div>
      </div>

      </div>

      <div className="flex justify-around items-center mt-[140px]">

        <div className="">

          <img className='w-[380px] h-auto' src="https://s3-alpha-sig.figma.com/img/ef0d/1d48/7273c3ffd4bc7fb0614dbba194a41031?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nRYNJSDew23kLX2wp7tIklCigJTiEeBNjnnpEU63SzIzzZQHlKpzzDxu2CTdxuD8~jVuex1O9j11aBv3hxCm3JW-B4xKnV9fX1ZnopeFaPf2xHscCMZUA2ZmMQOGmehtG6QuG2eOJiuICOIz7NdQ2cNhtI9y7zpv7cUivhy8JpuFG1gcsb7TUyDrDCZGOAFqfQPsPa2mQj0X5J2vE1bbR1oi3jmiXbs~n1TrJ0fzDogNbTFSeOWoIo~iN5~tLDdqu5U9FhiLZrZp3Zd8eY1bkk~Cmax9e0V5zc~6Es313~Ab-fnID3TGOLu2~U6Qw59ylYvjnEOiEJiFM5YzEP0DgA__" alt="" />

        </div>

          <div className="">
           <p className='text-[#FF6868] font-bold'>Testimonials</p> 
           <h1 className='font-bold text-4xl pt-[30px] pb-[30px]'>What Our Customers <br /> Say About Us</h1>
           <p className='text-[#555555] font-medium'>“I had the pleasure of dining at Foodi last night, and <br /> I'm still raving about the experience! The attention to <br /> detail in presentation and service was impeccable”</p>
          </div>

      </div>

      <div className="flex justify-between items-center">

      <div className="pt-[140px]">
        <p className='text-[#FF6868]'>Our Story & Services</p>

        <h1 className='font-bold text-5xl pt-[30px] pb-[30px]'>Our Culinary Journey <br /> And Services</h1>

        <p className='text-[#555555] pb-[30px]'>Rooted in passion, we curate unforgettable dining <br /> experiences and offer exceptional services, <br /> blending culinary artistry with warm hospitality.</p>

        <button className='text-white bg-[#39DB4A] py-[15px] px-[40px] rounded-[35px]'>Explore</button>

      </div>

      <div className="flex justify-around items-center flex-wrap w-[90vh] gap-[35px] mt-[200px]">

      <div className="w-[277px] h-[297px] shadow-[7px_12px_43px_0px_#00000024] bg-white flex justify-center items-center flex-col rounded-[50px]">
        <div className=""><svg xmlns="http://www.w3.org/2000/svg" width={78} height={78} viewBox="0 0 24 24"><g fill="none" stroke="#5FE26C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1m14.5 0c.351-1.017.426-2.236.5-3.714V6h-2.256c-2.83 0-4.616.804-5.64 2.076"></path><path d="M5.255 11.008A12 12 0 0 1 5 9V8h1.755c.98 0 1.801.124 2.479.35M8 8l1-4l4 2.5"></path><path d="M13 11v-.5a2.5 2.5 0 1 0-5 0v.5"></path></g></svg></div>

        <h3 className='text-[#5FE26C] text-3xl font-bold pt-[30px] pb-[30px]'>Catering</h3>

        <p className='text-center text-[#90BD95] w-[190px] h-[72px]'>Delight your guests with our flavors and  presentation</p>

        </div>

        <div className="w-[277px] h-[297px] shadow-[7px_12px_43px_0px_#00000024] bg-white flex justify-center items-center flex-col rounded-[50px]">
        
        <svg xmlns="http://www.w3.org/2000/svg" width={78} height={78} viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#5FE26C" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"></path></g></svg>

        <h3 className='text-[#5FE26C] text-3xl font-bold pt-[30px] pb-[30px]'>Fast delivery</h3>

        <p className='text-center text-[#90BD95] w-[190px] h-[72px]'>We deliver your order promptly to your door</p>

        </div>

        <div className="w-[277px] h-[297px] shadow-[7px_12px_43px_0px_#00000024] bg-white flex justify-center items-center flex-col rounded-[50px]">
        <svg xmlns="http://www.w3.org/2000/svg" width={78} height={78} viewBox="0 0 24 24"><g fill="none"><path fill="#5FE26C" d="M3 2.25a.75.75 0 0 0 0 1.5zM5 3l.748-.058A.75.75 0 0 0 5 2.25zm16 3l.745.083A.75.75 0 0 0 21 5.25zM5.23 6l-.747.058zm13.109 9.119l.053.748zm-10.355.74l-.053-.749zM3 3.75h2v-1.5H3zm5.037 12.856l10.355-.74l-.107-1.495l-10.354.74zm12.892-3.179l.816-7.344l-1.49-.166l-.816 7.345zM4.252 3.057l.231 3l1.496-.115l-.231-3zm.231 3l.617 8.017l1.495-.115l-.616-8.017zM21 5.25H5.23v1.5H21zm-2.608 10.617a2.75 2.75 0 0 0 2.537-2.44l-1.49-.165a1.25 1.25 0 0 1-1.154 1.109zM7.931 15.11a1.25 1.25 0 0 1-1.336-1.15l-1.495.114a2.75 2.75 0 0 0 2.937 2.532z"></path><path stroke="#5FE26C" strokeLinejoin="round" strokeWidth={2.25} d="M8.5 20.5h.01v.01H8.5zm9 0h.01v.01h-.01z"></path></g></svg>

        <h3 className='text-[#5FE26C] text-3xl font-bold pt-[30px] pb-[30px]'>Online Ordering</h3>

        <p className='text-center text-[#90BD95] w-[190px] h-[72px]'>Explore menu & order with ease using our Online Ordering </p>

        </div>

        <div className="w-[277px] h-[297px] shadow-[7px_12px_43px_0px_#00000024] bg-white flex justify-center items-center flex-col rounded-[50px]">
        <svg xmlns="http://www.w3.org/2000/svg" width={78} height={78} viewBox="0 0 24 24"><path fill="none" stroke="#5FE26C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 11v4c0 3.3 0 4.95 1.025 5.975S7.7 22 11 22h2c3.3 0 4.95 0 5.975-1.025S20 18.3 20 15v-4M3 9c0-.748 0-1.122.201-1.4a1.4 1.4 0 0 1 .549-.44C4.098 7 4.565 7 5.5 7h13c.935 0 1.402 0 1.75.16c.228.106.417.258.549.44C21 7.878 21 8.252 21 9s0 1.121-.201 1.4a1.4 1.4 0 0 1-.549.44c-.348.16-.815.16-1.75.16h-13c-.935 0-1.402 0-1.75-.16a1.4 1.4 0 0 1-.549-.44C3 10.121 3 9.748 3 9m3-5.214C6 2.799 6.8 2 7.786 2h.357A3.857 3.857 0 0 1 12 5.857V7H9.214A3.214 3.214 0 0 1 6 3.786m12 0C18 2.799 17.2 2 16.214 2h-.357A3.857 3.857 0 0 0 12 5.857V7h2.786A3.214 3.214 0 0 0 18 3.786M12 11v11" color="#5FE26C"></path></svg>

        <h3 className='text-[#5FE26C] text-3xl font-bold pt-[30px] pb-[30px]'>Gift Cards</h3>

        <p className='text-center text-[#90BD95] w-[190px] h-[72px]'>Give the gift of exceptional dining with Foodi Gift Cards</p>

        </div>

      </div>
      
      </div>

      <footer className=''>

        <div className="text-[#555555] flex justify-around items-center text-[18px] list-none mt-[100px]">

      <div className="">

      <img src={logo} alt="Logo" />
        <p className='text-center'>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>

        </div>

        <ul className=' '>
          <li className='font-bold text-black'>Useful links</li>
          <li>About us</li>
          <li>Events</li>
          <li>Blogs</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li className='font-bold text-black'>Main Menu</li>
          <li>Home</li>
          <li>Offers</li>
          <li>Menus</li>
          <li>Reservation</li>
        </ul>

        <ul>
          <li className='font-bold text-black'>Contact Us</li>
          <li>example@email.com</li>
          <li>+64 958 248 966</li>
          <li>Social media</li>
        </ul>

        </div>

        <div className="flex">

            <div className="flex justify-around items-center">
            </div>
          
        </div>

      </footer>

    </div>
    </div>
    
  );
}

export default App;
