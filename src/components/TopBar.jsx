import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
      <div className="flex items-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">Travel Theme</h1>
      </div>

      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">8AM - 4Am</p>
        </div>

        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">23-44-442-23</p>
        </div>

        <button>Get a free accsses</button>
      </div>
    </div>
  );
}

export default TopBar;
