
const page = () => {
  return (
    <div className="">
      {/* hero section  */}
      <div className="h-screen">
        <h1 id="hero" className="text-2xl abs-center">
          Coding ERA
        </h1>
      </div>
      {/* cards  */}
      <div className="relative p-10  ">
        <div className="*:m-5 sm:flex sm:justify-center">
          <div
            id="card1"
            className="bg-black size-70 rounded-2xl justify-center "
          >
            Card
          </div>
          <div
            id="card2"
            className="bg-black size-70 rounded-2xl justify-center"
          >
            Card
          </div>
          <div
            id="card3"
            className="bg-black size-70 rounded-2xl justify-center"
          >
            Card
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
