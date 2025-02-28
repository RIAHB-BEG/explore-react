import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";

const HomeDetails = () => {
  const homes = useLoaderData() || [];
  const { id } = useParams();
  const idInt = parseInt(id);

  const home = homes.find((home) => home.id === idInt);

  if (!home) {
    return <p className="text-center text-red-500">Home not found!</p>;
  }

  const { image, estate_title, segment_name, status, price, area , description,facilities,view_property,location } = home;

  return (
    <div>
      <div className="text-center grid md:grid-cols-2 grid-cols-1 me-52">
        <div className=" p-5 mt-20  rounded-xl-50 ms-64 ">
          <p className="bg-gray-200 p-12 rounded-xl ">
               <img src={image} alt={estate_title} className="w-full rounded-xl h-auto   " />
          </p>
       
        </div>
        <div className="text-start p-10 mt-14">
          <h1 className="text-3xl font-serif border-b-2 mb-5 pb-3">{estate_title}</h1>
          <h1 className="text-xl font-serif">{description}</h1>

          <h1 className=" mt-2 font-bold mb-3"> Facilities : {facilities}</h1>
      
          
          <hr />
          <div className="flex gap-5"> 
            <p className="text-lg -mt-1 font-bold me-2 align-middle  justify-start  mt-6">Tag</p>
                      <h1 className="-mt-3 btn bg-transparent border-none text-lime-500 bg-zinc-100 rounded-full mt-4 mb-4">#{segment_name}</h1>
          <h1 className="-mt-3 btn bg-transparent border-none text-lime-500 bg-zinc-100 rounded-full mt-4 mb-4 ">#{status}</h1>
          </div>

          <hr />
          <p className="font-serif mt-5">
            <span className="text-xl font-bold">Price :</span> ${price}
          </p>
          <p className="font-serif mt-3">
            <span className="text-xl font-bold">Area :</span> {area} 
          </p>
          <p className="font-serif mt-3">
            <span className="text-xl font-bold">Location :</span> {location} 
          </p>
         <a  href="https://findukproperty.com/?gad_source=1&gclid=CjwKCAiAzba9BhBhEiwA7glbaoIB4A458zCOT5LZZZ_DpSkAi4tzK539S96KJAD_4BoZ4wBTlKM54BoCWZgQAvD_BwE" className="-mt-3 btn bg-transparent border-none text-lime-500 bg-zinc-100 rounded-full mt-4 mb-4 ">
          {view_property}
         </a>
          <div className="card-actions justify-start ms-4 mt-10 bg-white mb-5">
  
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  
  );
};

export default HomeDetails;
