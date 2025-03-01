export default function PunjabiMenu({ language }) {
  console.log("hello jetal language is :",language);
  
  const menuData = {
    gujarati: {
      title: "પંજાબી",
      items: [
        { name: "પનીર ટિક્કા મસાલા", price: "₹ 150/110", bestSeller: true },
        { name: "પનીર બટર મસાલા", price: "₹ 170/140" },
        { name: "પનીર ભૂરજી", price: "₹ 150/110" },
        { name: "પનીર હાંડી", price: "₹ 170/140", bestSeller: true },
        { name: "કાજુ કરી મસાલા", price: "₹ 150/110" },
        { name: "કાજુ પનીર મસાલા", price: "₹ 180/140" },
        { name: "પનીર મટર", price: "₹ 160/130" },
        { name: "ચણા મસાલા", price: "₹ 100/80", bestSeller: true },
        { name: "જીરા રાઈસ", price: "₹ 70/50" },
        { name: "પ્લેન રાઇસ", price: "₹ 60/40" },
        { name: "દાલ ફ્રાય", price: "₹ 60/40" },
        { name: "દાલ તડકા", price: "₹ 70/50" },
        { name: "ચપાટી", price: "₹ 07" },
        { name: "બટર ચપાટી", price: "₹ 12" },
        { name: "છાશ", price: "₹ 15" },
      ],
    },
    hindi: {
      title: "पंजाबी",
      items: [
        { name: "पनीर टिक्का मसाला", price: "₹ 150/110", bestSeller: true },
        { name: "पनीर बटर मसाला", price: "₹ 170/140" },
        { name: "पनीर भुर्जी", price: "₹ 150/110" },
        { name: "पनीर हांडी", price: "₹ 170/140", bestSeller: true },
        { name: "काजू करी मसाला", price: "₹ 150/110" },
        { name: "काजू पनीर मसाला", price: "₹ 180/140" },
        { name: "पनीर मटर", price: "₹ 160/130" },
        { name: "चना मसाला", price: "₹ 100/80", bestSeller: true },
        { name: "जीरा राइस", price: "₹ 70/50" },
        { name: "प्लेन राइस", price: "₹ 60/40" },
        { name: "दाल फ्राय", price: "₹ 60/40" },
        { name: "दाल तड़का", price: "₹ 70/50" },
        { name: "चपाती", price: "₹ 07" },
        { name: "बटर चपाती", price: "₹ 12" },
        { name: "छाछ", price: "₹ 15" },
      ],
    },
    english: {
      title: "Punjabi",
      items: [
        { name: "Paneer Tikka Masala", price: "₹ 150/110", bestSeller: true },
        { name: "Paneer Butter Masala", price: "₹ 170/140" },
        { name: "Paneer Bhurji", price: "₹ 150/110" },
        { name: "Paneer Handi", price: "₹ 170/140", bestSeller: true },
        { name: "Kaju Curry Masala", price: "₹ 150/110" },
        { name: "Kaju Paneer Masala", price: "₹ 180/140" },
        { name: "Paneer Matar", price: "₹ 160/130" },
        { name: "Chana Masala", price: "₹ 100/80", bestSeller: true },
        { name: "Jeera Rice", price: "₹ 70/50" },
        { name: "Plain Rice", price: "₹ 60/40" },
        { name: "Dal Fry", price: "₹ 60/40" },
        { name: "Dal Tadka", price: "₹ 70/50" },
        { name: "Chapati", price: "₹ 07" },
        { name: "Butter Chapati", price: "₹ 12" },
        { name: "Buttermilk", price: "₹ 15" },
      ],
    },
  };

  const { title, items } = menuData[language] || menuData.gu;

  return (
    <div className="bg-[#222222] sm:px-36 text-white p-6 font-sans">
      <div className="mt-6 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
        {title}
      </div>
      <div className="mt-4">
        {items.map((item, index) => (
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
