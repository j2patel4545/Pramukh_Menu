export default function ChineseMenu({ language }) {
  const menuData = {
    gujarati: {
      mainCourse: "ચાઈનીઝ main course",
      noodles: "નૂડલ્સ",
      items: [
        { name: "મંચુરિયન ડ્રાય", price: "₹ 90/70", bestSeller: true },
        { name: "મંચુરિયન ગ્રેવી", price: "₹ 90/70" },
        { name: "પનીર-ચિલી ડ્રાય", price: "₹ 140/110", bestSeller: true },
        { name: "પનીર -65", price: "₹ 140/110" },
        { name: "ચાઈનીઝ બેલ", price: "₹ 100/80" },
        { name: "પનીર મંચુરિયન ડ્રાય", price: "₹ 130/100" }
      ],
      noodlesItems: [
        { name: "હક્કા નૂડલ્સ", price: "₹ 90/70" },
        { name: "મંચુરિયન નૂડલ્સ", price: "₹ 90/70" },
        { name: "સિઝવાન નૂડલ્સ", price: "₹ 90/70" },
        { name: "બર્ન ગાર્લિક નૂડલ્સ", price: "₹ 90/70" }
      ]
    },
    hindi: {
      mainCourse: "चाइनीज़ main course",
      noodles: "नूडल्स",
      items: [
        { name: "मंचूरियन ड्राई", price: "₹ 90/70", bestSeller: true },
        { name: "मंचूरियन ग्रेवी", price: "₹ 90/70" },
        { name: "पनीर-चिली ड्राई", price: "₹ 140/110", bestSeller: true },
        { name: "पनीर -65", price: "₹ 140/110" },
        { name: "चाइनीज़ बेल", price: "₹ 100/80" },
        { name: "पनीर मंचूरियन ड्राई", price: "₹ 130/100" }
      ],
      noodlesItems: [
        { name: "हक्का नूडल्स", price: "₹ 90/70" },
        { name: "मंचूरियन नूडल्स", price: "₹ 90/70" },
        { name: "सिज़वान नूडल्स", price: "₹ 90/70" },
        { name: "बर्न गार्लिक नूडल्स", price: "₹ 90/70" }
      ]
    },
    english: {
      mainCourse: "Chinese Main Course",
      noodles: "Noodles",
      items: [
        { name: "Manchurian Dry", price: "₹ 90/70", bestSeller: true },
        { name: "Manchurian Gravy", price: "₹ 90/70" },
        { name: "Paneer Chili Dry", price: "₹ 140/110", bestSeller: true },
        { name: "Paneer 65", price: "₹ 140/110" },
        { name: "Chinese Bell", price: "₹ 100/80" },
        { name: "Paneer Manchurian Dry", price: "₹ 130/100" }
      ],
      noodlesItems: [
        { name: "Hakka Noodles", price: "₹ 90/70" },
        { name: "Manchurian Noodles", price: "₹ 90/70" },
        { name: "Schezwan Noodles", price: "₹ 90/70" },
        { name: "Burnt Garlic Noodles", price: "₹ 90/70" }
      ]
    }
  };

  const selectedMenu = menuData[language] || menuData.english;

  return (
    <div className="bg-[#222222] sm:px-36 sm:border-t-2 sm:border-white text-white p-6 font-sans">
      <div className="mt-6 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
        {selectedMenu.mainCourse}
      </div>
      <div className="mt-4">
        {selectedMenu.items.map((item, index) => (
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
        {selectedMenu.noodles}
      </div>
      <div className="mt-4">
        {selectedMenu.noodlesItems.map((item, index) => (
          <div key={index} className="flex justify-between border-zinc-600 border-b py-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
