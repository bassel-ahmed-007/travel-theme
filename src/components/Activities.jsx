function Activities() {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/70 rounded-lg">
          Cairo
        </h3>
        <img
          className="w-[550px] h-full object-cover relative border-[10px] border-white shadow-lg"
          src="https://lp-cms-production.imgix.net/2023-09/GettyImages-528771416.jpg"
          alt=""
        />
      </div>
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/70 rounded-lg">
          London
        </h3>
        <img
          className="w-[550px] h-full object-cover relative border-[10px] border-white shadow-lg"
          src="https://www.momondo.com/discover/wp-content/uploads/sites/260/2020/02/DEST_NORWAY_LOFOTEN_GettyImages-1050245738_Universal_Within-usage-period_37137-1500x1312.jpg"
          alt=""
        />
      </div>
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/70 rounded-lg">
          New York
        </h3>
        <img
          className="w-[550px] h-full object-cover relative border-[10px] border-white shadow-lg"
          src="https://www.tmb.ie/wp/wp-content/uploads/2015/03/philipp-kammerer-6Mxb_mZ_Q8E-unsplash-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Activities;
