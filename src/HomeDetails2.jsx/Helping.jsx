export default function Helping({ list }) {
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
    s
  } = list || {}

  console.log(list);

  return (
    <div className="mt-5 mx-5 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-64">
    <div className="card flex flex-col md:flex-row bg-base-100 shadow-xl border-2">
      <figure className="p-4 md:p-6 lg:p-12 m-5 bg-zinc-200 flex justify-center">
        <img
          src={image}
          alt={estate_title}
          className="rounded-xl w-full md:w-80 lg:w-96"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title font-serif text-xl md:text-2xl">{estate_title}</h2>
        <p className="text-lg font-serif mt-3 flex items-center gap-2">
          <span>Status:</span>
          <span className="btn border-none rounded-full bg-zinc-100 text-lime-400 px-3 py-1">
            #{status}
          </span>
        </p>

        <div className="flex flex-wrap gap-3 mt-3 items-center">
          <div>
             <p className="text-lg font-bold">Tags:</p>
          </div>
         
          <span className="btn border-none rounded-full bg-zinc-100 text-lime-400 px-3 py-1">
            #{segment_name}
          </span>
          <span className="btn border-none rounded-full bg-zinc-100 text-lime-400 px-3 py-1">
            #{status}
          </span>
        </div>

        <p className="font-bold mt-2 text-lg">Price: ${price}</p>
        <p className="font-bold mt-2 text-lg">Area: {area} sqft</p>

        <div className="font-bold mt-3 flex flex-col md:flex-row gap-2 border-b-2 pb-2 text-lg">
          <span>Facilities: {facilities}</span>
          <span>Location: {location}</span>
        </div>

        <div className="flex flex-wrap mt-4 gap-3">
          <button className="btn rounded-full bg-sky-100 border-none text-blue-700 px-4 py-2 text-sm md:text-base">
            Category: {segment_name}
          </button>
          <button className="btn rounded-full bg-orange-50 border-none text-orange-400 px-4 py-2 text-sm md:text-base">
            Rating: 4.7
          </button>
          <button className="btn rounded-full px-6 py-2 bg-green-500 text-white border-none text-sm md:text-base">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
