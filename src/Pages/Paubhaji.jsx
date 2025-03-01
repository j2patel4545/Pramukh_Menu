export default function PaubhajiMenu({ language }) {
  const menuData = {
    gujarati: {
      title: "પાઉભાજી",
      items: [
        { name: "પાઉભાજી", price: "₹ 50/40" },
        { name: "બટર પાઉભાજી", price: "₹ 70/60" },
        { name: "ચીઝ પાઉભાજી", price: "₹ 70/60" },
        { name: "બટર ચીઝ પાઉભાજી", price: "₹ 80/60" },
        { name: "પનીર બટર પાઉભાજી", price: "₹ 90/70" },
        { name: "પાઉં", price: "₹ 06" },
        { name: "બટર પાઉં", price: "₹ 10" },
        { name: "મસાલા પાઉં", price: "₹ 50/25" },
        { name: "ભાજી -પુલાવ", price: "₹ 70/50" }
      ]
    },
    hindi: {
      title: "पावभाजी",
      items: [
        { name: "पावभाजी", price: "₹ 50/40" },
        { name: "बटर पावभाजी", price: "₹ 70/60" },
        { name: "चीज़ पावभाजी", price: "₹ 70/60" },
        { name: "बटर चीज़ पावभाजी", price: "₹ 80/60" },
        { name: "पनीर बटर पावभाजी", price: "₹ 90/70" },
        { name: "पाव", price: "₹ 06" },
        { name: "बटर पाव", price: "₹ 10" },
        { name: "मसाला पाव", price: "₹ 50/25" },
        { name: "भाजी - पुलाव", price: "₹ 70/50" }
      ]
    },
    english: {
      title: "Pav Bhaji",
      items: [
        { name: "Pav Bhaji", price: "₹ 50/40" },
        { name: "Butter Pav Bhaji", price: "₹ 70/60" },
        { name: "Cheese Pav Bhaji", price: "₹ 70/60" },
        { name: "Butter Cheese Pav Bhaji", price: "₹ 80/60" },
        { name: "Paneer Butter Pav Bhaji", price: "₹ 90/70" },
        { name: "Pav", price: "₹ 06" },
        { name: "Butter Pav", price: "₹ 10" },
        { name: "Masala Pav", price: "₹ 50/25" },
        { name: "Bhaji Pulav", price: "₹ 70/50" }
      ]
    }
  };

  const selectedMenu = menuData[language] || menuData.english;

  return (
    <div className="bg-[#222222] sm:px-36 text-white p-6 font-sans">
      <div className="mt-6 bg-green-200 p-2 w-max rounded-lg text-black text-lg">
        {selectedMenu.title}
      </div>
      <div className="mt-4">
        {selectedMenu.items.map((item, index) => (
          <div key={index} className="flex justify-between border-zinc-600 border-b py-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
