import React from 'react';

const PackagesComponent = () => {
  return (
    <div className="mt-28 pb-60">
      <h1 className="text-center text-6xl max-sm:text-5xl font-bold">
        Ticket Prices
      </h1>
      <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#ffffff] p-10 w-full">
          <div className="text-[#4d66e5]">Basic</div>
          <div className="text-6xl my-5 font-light">R150</div>
          <div>Basic Ticket Price</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#4E67E5] text-xl max-sm:text-lg hover:bg-[#8a9dfc] transition-all">
            Purchase Ticket
          </button>
          <ul>
            <li>Entrance to Boxing Match</li>
            <li>Economy class seats</li>
          </ul>
        </div>
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#ffffff] p-10 w-full">
          <div className="text-[#9967FF]">Feel at home</div>
          <div className="text-6xl my-5 font-light">R350</div>
          <div>We gotta treat you like long time friends!</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] transition-all">
            Purchase Ticket
          </button>
          <ul>
            <li>Entrance to Boxing Match</li>
            <li>A better view to our titans</li>
            <li>FIVE drinks on the house!</li>
          </ul>
        </div>
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#F7E16F]/25 bg-[#ffffff] p-10 w-full">
          <div className="text-[#F7E16F]">VIP</div>
          <div className="text-6xl my-5 font-light">R999</div>
          <div>Premium experience guaranteed</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#F7E16F] text-xl max-sm:text-lg hover:bg-[#fdf2bb] transition-all">
            Purchase Ticket
          </button>
          <ul>
            <li>Entrance to Boxing Match</li>
            <li>Front row seats</li>
            <li>Unlimited Free drinks</li>
            <li>The full VIP experience</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackagesComponent;
