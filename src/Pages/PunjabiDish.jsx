export default function PunjabiDish({ language }) {
  const dishData = {
    gujarati: {
      title: "પંજાબી થાળી",
      priceLabel: "એક થાળી",
      price: "₹150",
      items: [
        "સબ્જી - 2   (પનીર મસાલા & ચાના મસાલા )",
        "ચપાટી - 4",
        "જીરા રાઈસ",
        "દાલ ફ્રાય ",
        "સલાડ",
        "અથાણું",
        "પાપડ",
        "છાશ - 1 ગ્લાસ",
      ],
    },
    hindi: {
      title: "पंजाबी थाली",
      priceLabel: "एक थाली",
      price: "₹150",
      items: [
        "सब्जी - 2 (पनीर मसाला और चना मसाला)",
        "चपाती - 4",
        "जीरा राइस",
        "दाल फ्राय",
        "सलाद",
        "अचार",
        "पापड़",
        "छाछ - 1 गिलास",
      ],
    },
    english: {
      title: "Punjabi Thali",
      priceLabel: "One Thali",
      price: "₹150",
      items: [
        "Vegetables - 2 (Paneer Masala & Chana Masala)",
        "Chapati - 4",
        "Jeera Rice",
        "Dal Fry",
        "Salad",
        "Pickle",
        "Papad",
        "Buttermilk - 1 Glass",
      ],
    },
  };

  const { title, priceLabel, price, items } = dishData[language] || dishData.gu;

  return (
    <div className="bg-[#222222] sm:px-36 text-white p-6 font-sans relative">
      {/* Header Section */}
      <div className="relative flex flex-col items-center">
        <h1 className="text-green-300 text-4xl font-bold mt-4">{title}</h1>
      </div>
      
      {/* Price Section */}
      <div className="flex justify-between items-center bg-green-200 text-black text-lg px-4 py-2 mt-4 rounded-lg">
        <span>{priceLabel}</span>
        <span className="font-bold">{price}</span>
      </div>
      
      {/* Menu Items */}
      <div className="mt-6 border-l-2 border-green-400 pl-4">
        {items.map((item, index) => (
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
