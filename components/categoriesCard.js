export function CategoriesCard(p) {
  return (
    <div className="flex flex-col items-center hover:bg-[#eceaea] p-6">
      <div className="bg-[#EEEEEE] rounded-full w-24 h-24 flex items-center justify-center">
        <img src={p.logo} alt="" className="w-10 h-10" />
      </div>
      <h1 className="text-base font-semibold text-black pt-2">{p.category}</h1>
    </div>
  );
}
