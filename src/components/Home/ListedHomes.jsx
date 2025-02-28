import { NavLink } from "react-router-dom"

export default function ListedHomes({home}){

const {image,estate_title,segment_name,status,price,area,id} = home || {}


    return(
<>
<NavLink to={`/home/${id}`} >


<div className="card bg-base-100 w-96 shadow-xl border-2 h-full">
  <figure className="p-5  m-8 bg-zinc-100">
    <img className="rounded-lg"
      src={image}
      alt="books" />
  </figure>

  <div className="card-body">
  <div className="-mt-10 mb-5 font-serif text-xl">
        <h1>
        # {estate_title}
        </h1>
    </div>
  <div className="card-actions justify-start">
   
  
      <div className="-mt-3 btn bg-transparent border-none text-lime-500 bg-zinc-100 rounded-full ">#{segment_name}</div>
      <div className="-mt-3 btn bg-transparent border-none text-lime-500 bg-zinc-100 rounded-full ">#{status } </div>
     
    </div>
    <div className="font-bold mt-4 btn bg-transparent border-none text-lime-500 bg-zinc-100 rounded-full ">Area : {area}</div>
    <h2 className="card-title font-bold mt-2">
   Price : {price}

    </h2 >
    <p className="font-bold ms-1 mt-2 border-b-2 pb-3">{}</p>

  

  </div>
</div>
</NavLink>

</>

    )
}