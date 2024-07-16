function App() {
  return (
    <div className="flex flex-row w-auto h-auto p-3 gap-3">
      <div className="flex flex-col gap-2 w-[60px]">
        <div className="cursor-pointer hover:outline outline-2 outline-[#2E423D] rounded-[5px]">
          <img src="nike1.webp" alt="product_image" className="object-cover" />
        </div>
        <div className="cursor-pointer hover:outline outline-2 outline-[#2E423D] rounded-[5px]">
          <img src="nike2.webp" alt="product_image" className="object-cover" />
        </div>
        <div className="cursor-pointer hover:outline outline-2 outline-[#2E423D] rounded-[5px]">
          <img src="nike3.webp" alt="product_image" className="object-cover" />
        </div>
      </div>
      <div className="w-[528px] bg-[#F6F6F6]">
        <img src="nike1.webp" alt="product_image" />
      </div>
      <div className="flex flex-col gap-7 w-[394px] ml-10">
        <div>
          <p className="text-[#2E423D] text-sm subpixel-antialiased font-bold tracking-wide">
            Nike
          </p>
          <p className="text-[#111111] font-semibold text-3xl">
            Nike Air Force 1'07 LV8
          </p>
          <p className="text-[#757575] text-sm">Zapatillas para hombres</p>
        </div>
        <div>
          <div className="flex flex-row items-center gap-3">
            <p className="text-[#111111] font-semibold text-lg">$88.990</p>
            <div className="bg-[#2E423D] flex items-center rounded-[2px] px-1">
              <p className="text-white text-xs">-41%</p>
            </div>
          </div>
          <p className="text-[#C0C0BF] text-sm line-through">$149.990</p>
        </div>
        <p className="text-[#111111] font-semibold text-sm">
          Selecciona tu talla
        </p>
        <div className="flex gap-3 flex-wrap">
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            6
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            6.5
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            7
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            7.5
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            8
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            8.5
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            9
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            9.5
          </button>
          <button className="w-20 h-12 outline outline-1 outline-[#C0C0BF] rounded-[5px]">
            10
          </button>
        </div>
        <button className="w-full bg-[#2E423D] py-3 text-white rounded-[5px]">
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default App;
