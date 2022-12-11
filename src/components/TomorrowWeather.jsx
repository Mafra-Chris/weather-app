export default function TomorrowWeather() {
  return (
    <div className="bg-indigo-900 rounded-lg p-6 text-white flex flex-col justify-between mt-6 md:mt-0">
      <div>
        <h1 className="font-medium">Amanhã</h1>
        <h2 className="font-light text-sm">Sexta-feira</h2>
      </div>
      <div>
        <h1 className="font-semibold text-2xl">22°C</h1>
        <h2 className="font-light mt-1">Parcialmente nublado</h2>
      </div>
    </div>
  );
}
