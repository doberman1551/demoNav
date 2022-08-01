import Image from 'next/image';


function BottomBar3() {
    return ( 
        <div className="fixed inset-x-0 bottom-0 px-4 pb-3">
        <div className="relative px-4 py-3 text-white bg-primary rounded-lg pr-14">
    <div className="flex justify-center  items-center">
    
        <p className="text-lg font-semibold text-left sm:text-center mx-16">
             Остава ви <span className="bold text-2xl text-black">1 </span>статия <br></br> безплатно този месец
                 </p>
                 <div className="align-top -mr-72">
                 <svg  >
                <path fill="none" stroke="white" strokeWidth="2"  d="M1 0 L1 150"/>
                </svg>
                </div>
                
       <p className="sm:text-center py-1 font-semibold ml-8">     
      <a className="underline sm:text-center" href="https://www.capital.bg/"> Регистрирайте се или влезте в профила си, за да четете повече безплатно &rarr; </a>
      </p>
      


    <button
      aria-label="Close"
      className="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>
</div>



     );
    }
    
    export default BottomBar3;