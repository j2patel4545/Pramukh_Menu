export default function ChineseMenu() {
    return (
      <div className="bg-[#222222] sm:px-36 sm:border-t-2 sm:border-white text-white p-6 font-sans">
        
        
        <div className="mt-6 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
          ચાઈનીઝ main course
        </div>
        
        <div className="mt-4">
          {[
            { name: "મંચુરિયન ડ્રાય", price: "₹ 90/70", bestSeller: true },
            { name: "મંચુરિયન ગ્રેવી", price: "₹ 90/70" },
            { name: "પનીર-ચિલી ડ્રાય", price: "₹ 140/110", bestSeller: true },
            { name: "પનીર -65", price: "₹ 140/110" },
            { name: "ચાઈનીઝ બેલ", price: "₹ 100/80" },
            { name: "પનીર મંચુરિયન ડ્રાય", price: "₹ 130/100" }
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
  
        <div className="mt-6 bg-green-200 px-4 p-2 w-max rounded-lg text-black text-lg">
          નૂડલ્સ
        </div>
        
        <div className="mt-4">
          {[
            { name: "હક્કા નૂડલ્સ", price: "₹ 90/70" },
            { name: "મંચુરિયન નૂડલ્સ", price: "₹ 90/70" },
            { name: "સિઝવાન નૂડલ્સ", price: "₹ 90/70" },
            { name: "બર્ન ગાર્લિક નૂડલ્સ", price: "₹ 90/70" }
          ].map((item, index) => (
            <div key={index} className="flex justify-between border-zinc-600 border-b py-2">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        
       
      </div>
    );
  }
  
