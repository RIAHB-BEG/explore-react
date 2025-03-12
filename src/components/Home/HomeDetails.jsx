import { useLoaderData, useParams } from "react-router-dom";
import { addToWishList } from "../../js/localStorage";

const HomeDetails = () => {
  const homes = useLoaderData() || [];
  const { id } = useParams();
  const idInt = parseInt(id);

  const home = homes.find((home) => home.id === idInt);

  // Ensure `home` exists before destructuring
  if (!home) {
    return <p className="text-center text-red-500">Home not found!</p>;
  }

  const {
    image,
    estate_title,
    segment_name,
    status,
    price,
    area,
    description,
    facilities,
    view_property,
    location,
  } = home;

  const handleWishList = () => {
    addToWishList(idInt);
  };

  return (
    <div className="container mx-auto px-4 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
        <div className="p-5">
          <div className="bg-gray-200 p-4 rounded-xl shadow-md">
            <img src={image} alt={estate_title} className="w-full rounded-xl h-auto" />
          </div>
        </div>

        {/* Details Section */}
        <div className="text-start p-6">
          <h1 className="text-3xl font-serif border-b-2 pb-3">{estate_title}</h1>
          <p className="text-lg mt-3">{description}</p>

          <h2 className="mt-4 font-bold">Facilities:</h2>
          <p className="text-gray-600">
            #{facilities}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-zinc-100 text-lime-500 rounded-full text-sm font-medium">
              #{segment_name}
            </span>
            <span className="px-3 py-1 bg-zinc-100 text-lime-500 rounded-full text-sm font-medium">
              #{status}
            </span>
          </div>

     
          <div className="mt-5">
            <p className="font-serif">
              <span className="text-xl font-bold">Price:</span> ${price}
            </p>
            <p className="font-serif mt-3">
              <span className="text-xl font-bold">Area:</span> {area}
            </p>
            <p className="font-serif mt-3">
              <span className="text-xl font-bold">Location:</span> {location}
            </p>
          </div>

          <div className="flex gap-6">
        
            <a
              href="https://findukproperty.com/"
            
              rel="noopener noreferrer"
              className="inline-block pt-3 px-6 py-2 mt-5 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition"
            >
              {view_property}
            </a>

        
            <button 
              className="btn mt-5 bg-transparent px-6 py-2 border-red-400 text-red-400 hover:bg-red-400 rounded-full hover:text-white"
              onClick={() => handleWishList()}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
