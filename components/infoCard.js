export function InfoCard(p) {
  return (
    <div className="flex flex-col items-center ">
      <img src={p.images} alt="" className="w-20 h-30" />
      <p className="text-base text-center pt-8">{p.description}</p>
    </div>
  );
}
