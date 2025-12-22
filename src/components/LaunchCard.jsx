function LaunchCard({ launch }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-200 bg-white">
      <img
        src={launch.image}
        alt={launch.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl">{launch.title}</h3>
        <p className="text-gray-500 mb-2">{launch.subtitle}</p>
        <p className="text-orange-500 font-semibold mb-2">{launch.status}</p>
        <p className="text-gray-700 mb-4">{launch.description}</p>
        <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600">
          {launch.buttonText}
        </button>
      </div>
    </div>
  );
}

export default LaunchCard;
