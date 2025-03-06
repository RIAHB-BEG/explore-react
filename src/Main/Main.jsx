

export default function Main() {
  return (
    <>
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <h1 className="text-black text-center text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
        Main Features
        </h1>
        <p className="text-center mt-3 font-medium text-lg md:text-xl max-w-2xl">
          We are builders and sellers. Choose your own, keep your family happy. 
          <br /> Home is not a place, it's a feeling. Home is where our story begins.
        </p>

        <img 
          src="/Screenshot (19).png" 
          alt="About Us" 
          className="pt-10 max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

    </>
  );
}
