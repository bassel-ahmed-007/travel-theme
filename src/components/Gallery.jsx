function Gallery() {
  return (
    <div id="gallery" className="max-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://www.boredpanda.com/blog/wp-content/uploads/2014/04/amazing-places-to-see-before-you-die-coverimage.jpg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://img.money.com/2023/03/Best-Places-Travel-2023-Alexandria-1.jpg?w=1200&quality=60"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://366e203a.rocketcdn.me/wp-content/uploads/2020/06/Paris.jpg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/04105915/chile.jpg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://media.timeout.com/images/105738421/750/422/image.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
