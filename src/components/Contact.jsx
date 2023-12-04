function Contact() {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">we are waiting for you</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:w-full object-cover p-2 max-h-[500px] h-[200px] lg:h-full"
          src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20230122123920/pexels-pixabay-51363-scaled.jpg"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2"
              type="phone"
              placeholder="Phone"
            />
            <input
              className="border col-span-2 p-2 m-2"
              type="phone"
              placeholder="Adress"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
