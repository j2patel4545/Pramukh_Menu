export default function Punjabi() {
    return (
      <div className="bg-[#222222]  text-white p-6 font-sans">
        {/* <div className="relative ">
          <img
            src="https://i.pinimg.com/736x/d2/26/09/d22609efc42984ac31068cafc8f9427b.jpg"
            alt="Food"
            className="w-full rounded-br-4xl rounded-tl-4xl bg- h-40 object-cover"
          />
          <h1 className="absolute top-12 left-8 text-4xl font-bold text-green-300">
            ચાઈનીઝ
          </h1>
        </div> */}
        
        <div className="mt-6 bg-green-200 px-4 p-2 w-max rounded-lg text-black text-lg">
        પાઉભાજી   </div>
        
        <div className="mt-4">
          {[
            { name: " પાઉભાજી ", price: "₹ 50/40"  },
            { name: "બટર પાઉભાજી ", price: "₹ 70/60"},
            { name: "ચીઝ પાઉભાજી  ", price: "₹ 70/60" },
            { name: "બટર ચીઝ પાઉભાજી   ", price: "₹ 80/60"},
            { name: "પનીર બટર પાઉભાજી ", price: "₹ 90/70" },
            { name: "પાઉં  ", price: "₹ 06" },
            { name: " બટર પાઉં   ", price: "₹ 10" },
            { name: " મસાલા  પાઉં  ", price: "₹ 50/25" },
            { name: "ભાજી -પુલાવ    ", price: "₹ 70/50" }  ].map((item, index) => (
            <div key={index} className="flex justify-between border-zinc-600 border-b py-2">
              <span className="flex items-center">
                {item.name}
                {item.bestSeller && (
                  <span className="ml-2 bg-green-300 text-xs text-black px-2 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
              </span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
  
      
        
       
      </div>
    );
  }
  