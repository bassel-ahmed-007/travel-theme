function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="w-full h-full object-cover"
        src="https://surethingshortsales.com/wp-content/uploads/2023/09/jpg.jpg"
        alt="hero-img"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:[50%] max-w-[600px] h-full flex flex-col text-white p-4 ">
          <h1 className="font-bold text-4xl ">find your special place!</h1>
          <h2 className="text-4xl py-4 italic">
            with{" "}
            <span className="text-[var(--primary-dark)] text-5xl ">
              Travel theme
            </span>
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            reprehenderit reiciendis quam blanditiis delectus molestiae corrupti
            ut perspiciatis ab ipsam sunt harum cum laborum quis id dolorem,
            perferendis autem aspernatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
