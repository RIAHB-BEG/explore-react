import { NavLink } from "react-router-dom";

const Blog = () => {
  
  return(
    <>
<div className="mt-24 bg-[url('https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600')] 
    text-center px-6 md:px-44 lg:px-48 py-20 md:py-64 bg-cover bg-center ">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-900 mb-6">
    Home Instead Ltd.
  </h1>
  <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-yellow-900">
    We Provide Endless Facilities
  </p>
</div>

<div className="text-center mt-12 md:mt-20">
  <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
    Our Blogs
  </h1>
  <p className="text-xl md:text-2xl font-bold mt-3">
    We are here to help you build or transform your home into a palace.
  </p>
</div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center h-full mt-24">
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://media.istockphoto.com/id/2155879454/photo/this-is-an-exterior-photo-of-a-home-for-sale-in-beverly-hills-ca.webp?a=1&b=1&s=612x612&w=0&k=20&c=GvT1GQsxPREVk5rWMjlZaZHJH8TSpBDagNgZDg1NxyE="
        alt="House"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold text-2xl md:text-3xl text-red-500" >1. High Quality</h2>
      <p>Our personal style is a mix minimalist of traditional, modern and rustic.
         It’s nice to mix and match. Since we are an Architect and ID, we
          understand the boundaries of mixing styles but still cohesive.</p>
          <NavLink to="/about">
                <div className="card-actions justify-end">
        <button className="btn  px-5 bg-green-500 text-white border-none ">About this</button>
      </div>
          </NavLink>
  
    </div>
  </div>

  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYNV4ydq_T7ldqR4v3aIwOshCZqBuEopq4AcFObrBf8="
        alt="House"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold text-2xl md:text-3xl text-red-500">2.Huge facilities</h2>
      <p>Our personal style is a mix minimalist of traditional, modern and rustic.
         It’s nice to mix and match. Since we are an Architect and ID, we
          understand the boundaries of mixing styles but still cohesive.</p>
          <NavLink to="/about">
                <div className="card-actions justify-end">
        <button className="btn  px-5 bg-green-500 text-white border-none ">About this</button>
      </div>
          </NavLink>
  
    </div>
  </div>

  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D"
        alt="House"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold text-2xl md:text-3xl text-red-500">3. Beutiful design</h2>
      <p>Our personal style is a mix minimalist of traditional, modern and rustic.
         It’s nice to mix and match. Since we are an Architect and ID, we
          understand the boundaries of mixing styles but still cohesive.</p>
          <NavLink to="/about">
                <div className="card-actions justify-end">
        <button className="btn  px-5 bg-green-500 text-white border-none ">About this</button>
      </div>
          </NavLink>
  
    </div>
  </div>

  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://media.istockphoto.com/id/2151912551/photo/building-contractor-talking-to-clients-renovating-their-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=aijAw2m6CwGNVX_hPCLLaN-4T4OiARrrbDaoDIL2PrQ="
        alt="House"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold text-2xl md:text-3xl text-red-500">4. Expert builders</h2>
      <p>Our personal style is a mix minimalist of traditional, modern and rustic.
         It’s nice to mix and match. Since we are an Architect and ID, we
          understand the boundaries of mixing styles but still cohesive.</p>
          <NavLink to="/about">
                <div className="card-actions justify-end">
        <button className="btn  px-5 bg-green-500 text-white border-none ">About this</button>
      </div>
          </NavLink>
  
    </div>
  </div>

  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://media.istockphoto.com/id/2175973016/photo/modern-luxury-home-exterior-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=B2e-gEujpM7UNHX3uMHqvyh_bHC5sHFYfxf0ldEc6R0="
        alt="House"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold text-2xl md:text-3xl text-red-500">5. Trusted</h2>
      <p>Our personal style is a mix minimalist of traditional, modern and rustic.
         It’s nice to mix and match. Since we are an Architect and ID, we
          understand the boundaries of mixing styles but still cohesive.</p>
          <NavLink to="/about">
                <div className="card-actions justify-end">
        <button className="btn  px-5 bg-green-500 text-white border-none ">About this</button>
      </div>
          </NavLink>
  
    </div>
  </div>

  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="House"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold text-2xl md:text-3xl text-red-500">6. Bughet friendly</h2>
      <p>Our personal style is a mix minimalist of traditional, modern and rustic.
         It’s nice to mix and match. Since we are an Architect and ID, we
          understand the boundaries of mixing styles but still cohesive.</p>
          <NavLink to="/about">
                <div className="card-actions justify-end">
        <button className="btn  px-5 bg-green-500 text-white border-none ">About this</button>
      </div>
          </NavLink>
  
    </div>
  </div>
  </div>



    </>
  )
};

export default Blog;
