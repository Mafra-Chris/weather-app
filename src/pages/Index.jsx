import { useEffect } from 'react';
//import getWeather from '../services/WeatherAPI';
export default function Index() {
  // useEffect(() => {
  //   const getCountryWeather = async () => {
  //     //await getWeather(39.31, -74.5);
  //   };
  //   getCountryWeather();
  // }, []);
  return (
    <div className="md:grid md:grid-cols-3 gap-2 h-screen ">
      <div className="md:col-span-2 p-4">
        <header className="flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">08/12/2022</h1>
            <h2 className="text-gray-600">Quinta-feira</h2>
          </div>
          <input type="text" className="bg-gray-100 rounded-lg" />
        </header>
        <div className="grid grid-cols-2 gap-3 text-white mt-8">
          <div className="bg-indigo-900 rounded-xl p-4">
            <h1>Tempo Agora</h1>
            <div>
              <h1 className="font-semibold text-2xl">22°C</h1>
              <h2>Parcialmente nublado</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className=" bg-slate-300 rounded-xl">
                <h1>Pressão</h1>
                <h2>800mb</h2>
              </div>
              <div className=" bg-slate-300 rounded-xl">
                <h1>Visibilidade</h1>
                <h2>4.3 km</h2>
              </div>
              <div className=" bg-slate-300 rounded-xl">
                <h1>Umidade</h1>
                <h2>87%</h2>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 rounded-xl p-4">
            <div>
              <h1>Qualidade do Ar</h1>
              <h2>Poluente principal: PM 2.5</h2>
            </div>
            <div>
              <h1 className="font-semibold text-2xl">
                390 <span>AQI</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
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
          <div className="bg-indigo-900 rounded-lg p-4">
            <div>
              <h1>Amanhã</h1>
              <h2>Sexta-feira</h2>
            </div>
            <div>
              <h1 className="font-semibold text-2xl">22°C</h1>
              <h2>Parcialmente nublado</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full bg-gray-100 py-4 px-8">
        <div className="flex justify-between border-b-2 border-gray-300 pb-6 mb-6">
          <div>
            <h1 className="text-lg font-medium">Nova York</h1>
            <h2 className="text-gray-600">06:19 AM</h2>
          </div>
          <span className="font-semibold text-2xl self-center">22°C</span>
        </div>

        <div>
          <h1 className="font-semibold text-2xl mb-6">
            Nascer do Sol & Pôr do Sol
          </h1>
          <div className="rounded-lg bg-white p-2 flex justify-between mb-3">
            <div className="flex">
              <img
                src=" http://openweathermap.org/img/wn/10d.png"
                className="h-16"
              />

              <div className="self-center">
                <h1 className="text-gray-600 mb-1">Nascer do Sol</h1>
                <h2 className="font-semibold">05:00</h2>
              </div>
            </div>
            <h1 className=" self-center">há 5h</h1>
          </div>
          <div className="rounded-lg bg-white p-2 flex justify-between">
            <div className="flex">
              <img
                src=" http://openweathermap.org/img/wn/10d.png"
                className="h-16"
              />

              <div className="self-center">
                <h1 className="text-gray-600 mb-1">Nascer do Sol</h1>
                <h2 className="font-semibold">17:00</h2>
              </div>
            </div>
            <h1 className=" self-center">em 10h</h1>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl my-6 ">Previsão do tempo</h1>
          <div className="flex flex-col gap-3">
            <div className="rounded-lg bg-white p-2 flex justify-between">
              <div className="flex">
                <img
                  src=" http://openweathermap.org/img/wn/10d.png"
                  className="h-16"
                />

                <div className="self-center">
                  <h1 className="text-gray-600 mb-1">Dezembro 9</h1>
                  <h2 className="font-semibold">Ensolarado</h2>
                </div>
              </div>
              <h1 className="font-semibold text-lg self-center">26°/19°</h1>
            </div>
            <div className="rounded-lg bg-white p-2 flex justify-between">
              <div className="flex">
                <img
                  src=" http://openweathermap.org/img/wn/10d.png"
                  className="h-16"
                />

                <div className="self-center">
                  <h1 className="text-gray-600 mb-1">Dezembro 9</h1>
                  <h2 className="font-semibold">Ensolarado</h2>
                </div>
              </div>
              <h1 className="font-semibold text-lg self-center">26°/19°</h1>
            </div>
            <div className="text-right">
              <button className="rounded-lg bg-orange-500 py-2 px-3 text-white">
                Próximos dias
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
