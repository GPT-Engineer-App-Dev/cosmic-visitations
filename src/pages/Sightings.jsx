import React from "react";

const sightings = [
  {
    date: "2023-10-01",
    location: "Roswell, NM",
    description: "Bright light moving erratically in the sky.",
    image: "/images/sighting1.jpg",
  },
  {
    date: "2023-09-15",
    location: "Area 51, NV",
    description: "Disc-shaped object hovering above the base.",
    image: "/images/sighting2.jpg",
  },
  // Add more sightings as needed
];

const Sightings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Recent UFO Sightings</h1>
      <ul className="space-y-4">
        {sightings.map((sighting, index) => (
          <li key={index} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{sighting.date} - {sighting.location}</h2>
            <p className="mt-2">{sighting.description}</p>
            {sighting.image && <img src={sighting.image} alt={`Sighting at ${sighting.location}`} className="w-full h-auto mt-2" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sightings;