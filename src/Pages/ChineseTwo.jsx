export default function ChineseTwo({ language }) {
  const menuData = {
    gujarati: {
      categories: {
        rice: "પુલાવ/રાઈસ",
        soup: "સૂપ",
      },
      items: {
        rice: [
          { name: "પુલાવ", price: "₹ 90/70" },
          { name: "મંચુરિયન પુલાવ", price: "₹ 90/70", bestSeller: true },
          { name: "સિઝવાન રાઈસ", price: "₹ 90/70" },
          { name: "પનીર રાઈસ", price: "₹ 120/100" },
          { name: "સિંગાપોરી રાઈસ", price: "₹ 90/70" },
          { name: "જીરા રાઈસ", price: "₹ 70/50" },
        ],
        soup: [
          { name: "સાદો ચાઇનીઝ સૂપ", price: "₹ 80/60" },
          { name: "મંચાઉ સૂપ", price: "₹ 80/60", bestSeller: true },
          { name: "મંચુરિયન સૂપ", price: "₹ 80/60" },
          { name: "મંચુરિયન મંચાઉ સૂપ", price: "₹ 80/60" },
          { name: "ટોમેટો સૂપ", price: "₹ 80/60" },
        ],
      },
    },
    hindi: {
      categories: {
        rice: "पुलाव/राइस",
        soup: "सूप",
      },
      items: {
        rice: [
          { name: "पुलाव", price: "₹ 90/70" },
          { name: "मंचूरियन पुलाव", price: "₹ 90/70", bestSeller: true },
          { name: "सिजवान राइस", price: "₹ 90/70" },
          { name: "पनीर राइस", price: "₹ 120/100" },
          { name: "सिंगापोरी राइस", price: "₹ 90/70" },
          { name: "जीरा राइस", price: "₹ 70/50" },
        ],
        soup: [
          { name: "सादा चाइनीज़ सूप", price: "₹ 80/60" },
          { name: "मंचाउ सूप", price: "₹ 80/60", bestSeller: true },
          { name: "मंचूरियन सूप", price: "₹ 80/60" },
          { name: "मंचूरियन मंचाउ सूप", price: "₹ 80/60" },
          { name: "टोमेटो सूप", price: "₹ 80/60" },
        ],
      },
    },
    english: {
      categories: {
        rice: "Pulav/Rice",
        soup: "Soup",
      },
      items: {
        rice: [
          { name: "Pulav", price: "₹ 90/70" },
          { name: "Manchurian Pulav", price: "₹ 90/70", bestSeller: true },
          { name: "Schezwan Rice", price: "₹ 90/70" },
          { name: "Paneer Rice", price: "₹ 120/100" },
          { name: "Singaporean Rice", price: "₹ 90/70" },
          { name: "Jeera Rice", price: "₹ 70/50" },
        ],
        soup: [
          { name: "Plain Chinese Soup", price: "₹ 80/60" },
          { name: "Manchow Soup", price: "₹ 80/60", bestSeller: true },
          { name: "Manchurian Soup", price: "₹ 80/60" },
          { name: "Manchurian Manchow Soup", price: "₹ 80/60" },
          { name: "Tomato Soup", price: "₹ 80/60" },
        ],
      },
    },
  };

  const selectedMenu = menuData[language] || menuData.english;

  return (
    <div className="bg-[#222222] sm:px-36 text-white p-6 font-sans">
      <div className="mt-6 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
        {selectedMenu.categories.rice}
      </div>

      <div className="mt-4">
        {selectedMenu.items.rice.map((item, index) => (
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

      <div className="mt-6 px-4 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
        {selectedMenu.categories.soup}
      </div>

      <div className="mt-4">
        {selectedMenu.items.soup.map((item, index) => (
          <div key={index} className="flex justify-between border-zinc-600 border-b py-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
