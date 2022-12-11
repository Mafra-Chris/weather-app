export default function TodayTemperature() {
  return (
    <div className="col-span-2">
      <h1 className="font-semibold text-2xl mb-8">
        Como está a temperatura hoje?
      </h1>
      <div className="text-center grid grid-cols-4 mt-4">
        <div className="border-slate-300 border-r">
          <img
            src=" http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className="m-auto"
          />
          <h1 className="font-semibold text-lg  mt-4">22°C</h1>
          <h2 className="text-gray-600">Manhã</h2>
        </div>
        <div className="border-slate-300 border-r">
          <img
            src=" http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className="m-auto"
          />
          <h1 className="font-semibold text-lg  mt-4">22°C</h1>
          <h2 className="text-gray-600">Tarde</h2>
        </div>
        <div className="border-slate-300 border-r">
          <img
            src=" http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className="m-auto"
          />
          <h1 className="font-semibold text-lg  mt-4">22°C</h1>
          <h2 className="text-gray-600">Final da tarde</h2>
        </div>
        <div className="">
          <img
            src=" http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className="m-auto"
          />
          <h1 className="font-semibold text-lg  mt-4">22°C</h1>
          <h2 className="text-gray-600">Noite</h2>
        </div>
      </div>
    </div>
  );
}
