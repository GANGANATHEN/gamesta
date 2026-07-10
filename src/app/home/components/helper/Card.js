import Image from "next/image";

export const Card = ({ item }) => {
  return (
    <div>
      <Image
        src={item.icon}
        alt={item.name}
        width={150}
        height={150}
        className="object-contain"
      />

      <div className="mt-3">
        <h3 className="text-lg font-semibold text-[#00B3E8]">{item.name}</h3>

        <p className="text-sm text-[#9BA1A4]">{item.role}</p>

        <p className="mt-2 text-sm leading-6 text-[#273A41]">{item.text}</p>
      </div>
    </div>
  );
};
