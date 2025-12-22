import members from "../data/FeaturedMembers";

function FeaturedMembers() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Featured Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMembers;
