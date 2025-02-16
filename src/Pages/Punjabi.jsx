export default function Paubhaji() {
    return (
      <div className="bg-[#222222] sm:px-36 text-white p-6 font-sans">
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
        
        <div className="mt-6 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
        પંજાબી           </div>
        
        <div className="mt-4">
          {[
            { name: " પનીર ટિક્કા મસાલા  ", price: "₹ 150/110" , bestSeller: true  },
            { name: "પનીર બટર મસાલા  ", price: "₹ 170/140"},
            { name: "પનીર ભૂરજી   ", price: "₹ 150/110" },
            { name: "પનીર હાંડી  ", price: "₹ 170/140" ,bestSeller: true },
            { name: "કાજુ કરી મસાલા ", price: "₹ 150/110" },
            { name: "કાજુ પનીર મસાલા  ", price: "₹ 180/140" },
            { name: " પનીર મટર   ", price: "₹ 160/130" },
            { name: "ચણા મસાલા  ", price: "₹ 100/80", bestSeller: true },
            { name: "જીરા રાઈસ    ", price: "₹ 70/50" },
            { name: "પ્લેન રાઇસ   ", price: "₹ 60/40" },
            { name: "દાલ ફ્રાય  ", price: "₹ 60/40" },
            { name: "દાલ તડકા   ", price: "₹ 70/50" },
            { name: "ચપાટી", price: "₹ 07" },
            { name: "બટર ચપાટી ", price: "₹ 12" },
            { name: "છાશ", price: "₹ 15" }          ].map((item, index) => (
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
  
