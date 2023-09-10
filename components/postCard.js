export function PostCard(p) {
  return (
    <div className="min-w-[340px] w-[340px] shadow-xl border-gray-300 border hover:shadow-2xl">
      <img src={p.image} alt="" className="w-full" />
      <p className="text-[#363537] text-base font-bold pt-3 pb-6 text-center">
        {p.title}
      </p>
      <p className="text-center text-[#9a9a9a] text-base  pt-4 px-2 pb-14">
        {p.description}
      </p>
    </div>
  );
}
