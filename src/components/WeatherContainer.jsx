export default function WeatherContainer() {
  return (
    <div className="bg-indigo-900 rounded-xl p-6 mb-6 md:mb-0">
      <div className="flex">
        {/* <FontAwesomeIcon
                icon="fa-solid fa-temperature-three-quarters"
                className="bg-white rounded-full h-10 w-10 text-orange-500 p-2"
              /> */}
        <div>
          <h1 className="font-medium">Tempo</h1>
          <h2 className="font-light text-sm">Qual o tempo agora?</h2>
        </div>
      </div>
      <div className="my-8">
        <h1 className="font-semibold text-2xl">22°C</h1>
        <h2 className="font-light mt-1">Parcialmente nublado</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-center text-black">
        <div className=" bg-slate-300 rounded-xl py-3 h-16">
          <h1 className="font-light text-sm">Pressão</h1>
          <h2 className="font-medium">800mb</h2>
        </div>
        <div className=" bg-slate-300 rounded-xl py-3 h-16">
          <h1 className="font-light text-sm">Visibilidade</h1>
          <h2 className="font-medium">4.3 km</h2>
        </div>
        <div className=" bg-slate-300 rounded-xl py-3 h-16">
          <h1 className="font-light text-sm">Umidade</h1>
          <h2 className="font-medium">87%</h2>
        </div>
      </div>
    </div>
  );
}
