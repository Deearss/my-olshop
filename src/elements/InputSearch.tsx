import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InputSearch() {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="relative overflow-hidden border border-teal-500 rounded h-[3rem]">
          <span className="z-[2] !left-[0%] !translate-x-0 bg-teal-500 flexc size-[3rem] text-black transcenter">
            <span className="relative select-none clicked transall size-full">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-white transcenter"
                fontSize={20}
              />
            </span>
          </span>
          <input
            className="relative w-full ps-[3.5rem] ring-0 outline-none px-2 h-full border border-gray-300 rounded shadow shadow-gray-300 text-gray-600 text-[0.9rem]"
            type="search"
            name="search"
            id="search"
          />
        </div>
      </form>
    </>
  );
}

export default InputSearch;
