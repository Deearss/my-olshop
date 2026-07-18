import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("None");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="relative flex items-center h-[3rem] text-teal-600 outline outline-1 outline-teal-600 rounded-md w-72">
        <div
          ref={dropdownRef}
          tabIndex={0}
          onFocus={() => {
            setIsOpen(true);
          }}
          onBlur={() => setIsOpen(false)}
          className="flex items-center w-full h-full font-semibold rounded-md appearance-none cursor-pointer ps-32 focus:outline-none focus:ring-0"
        >
          {selectedOption}
          {isOpen && (
            <div className="absolute left-0 z-10 w-full mt-1 bg-white rounded-md outline-1 outline outline-teal-600 top-full">
              <div
                onClick={() => {
                  setSelectedOption("None");

                  dropdownRef.current?.blur();
                  setIsOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-teal-100"
              >
                None
              </div>
              <div
                onClick={() => {
                  setSelectedOption("highest");

                  dropdownRef.current?.blur();
                  setIsOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-teal-100"
              >
                Highest
              </div>
              <div
                onClick={() => {
                  setSelectedOption("lowest");

                  dropdownRef.current?.blur();
                  setIsOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-teal-100"
              >
                Lowest
              </div>
            </div>
          )}
        </div>
        <span className="absolute text-gray-500 pointer-events-none left-3">
          sort price by :
        </span>
        <FontAwesomeIcon className="absolute right-3" icon={faFilter} />
      </div>
    </div>
  );
}

export default Dropdown;
