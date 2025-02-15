export default function Paubhaji() {
    return (
      <div className="bg-[#222222] text-white p-6 font-sans">
        
        
        <div className="mt-6 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
        પાઉભાજી        </div>
        
        <div className="mt-4">
          {[
            { name: "પાઉભાજી", price: "₹ 50/40", bestSeller: true },
            { name: "બટર પાઉભાજી ", price: "₹ 70/60" },
            { name: "ચીઝ પાઉભાજી ", price: "₹ 70/60", bestSeller: true },
            { name: "બટર ચીઝ પાઉભાજી  ", price: "₹ 80/60" },
            { name: "પનીર બટર પાઉભાજી ", price: "₹ 90/70" },
            { name: "પાઉં ", price: "₹ 06" },
            { name: "બટર પાઉં ", price: "₹ 10", bestSeller: true },
            { name: " મસાલા  પાઉં  ", price: "₹ 50/25" },
            { name: "ભાજી -પુલાવ  ", price: "₹ 70/50", bestSeller: true }
          ].map((item, index) => (
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
  
