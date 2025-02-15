export default function PunjabiDish() {
    return (
      <div className="bg-[#222222] text-white p-6 font-sans relative">
        {/* Header Section with Images */}
        <div className="relative flex flex-col items-center">
          {/* <div className="w-full flex justify-between">
            <img
              src="https://i.pinimg.com/736x/d2/26/09/d22609efc42984ac31068cafc8f9427b.jpg"
              alt="Punjabi Thali"
              className="w-1/2 h-40 object-cover rounded-tl-3xl"
            />
            <img
              src="https://i.pinimg.com/736x/d2/26/09/d22609efc42984ac31068cafc8f9427b.jpg"
              alt="Roti Basket"
              className="w-1/2 h-40 object-cover rounded-br-3xl"
            />
          </div> */}
          <h1 className="text-green-300 text-4xl font-bold mt-4">પંજાબી થાળી</h1>
        </div>
        
        {/* Price Section */}
        <div className="flex justify-between items-center bg-green-200 text-black text-lg px-4 py-2 mt-4 rounded-lg">
          <span>એક થાળી</span>
          <span className="font-bold">₹150</span>
        </div>
        
        {/* Menu Items */}
        <div className="mt-6 border-l-2 border-green-400 pl-4">
          {[
            "સબ્જી - 2   (પનીર મસાલા & ચાના મસાલા )",
            "ચપાટી - 4",
            "જીરા રાઈસ",
            "દાલ ફ્રાય ",
            "સલાડ",
            "અથાણું",
            "પાપડ",
            "છાશ - 1 ગ્લાસ",
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 py-1">
              <span className="text-green-400">➝</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
  
        {/* Footer */}
        <div className="text-sm text-gray-400 mt-6">MO NO. 9904175561</div>
      </div>
    );
  }
  
