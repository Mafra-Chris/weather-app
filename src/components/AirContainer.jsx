export default function AirContainer() {
  return (
    <div className="bg-indigo-900 rounded-xl p-6">
      <div>
        <h1 className="font-medium">Qualidade do Ar</h1>
        <h2 className="font-light text-sm">Poluente principal: PM 2.5</h2>
      </div>
      <div className="my-8">
        <h1 className="font-semibold text-2xl">
          390{' '}
          <span className="bg-slate-300 rounded-lg text-sm font-normal px-3 py-1 ml-3">
            AQI
          </span>
        </h1>
        <h2 className="font-light mt-1">Vento Norte</h2>
      </div>
      <div className="bg-slate-300 rounded-lg py-3 px-2 h-16">h</div>
    </div>
  );
}
