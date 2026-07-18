import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavOptions() {
  return (
    <>
      <div className="h-full gap-3 w-52 flexc">
        <div className="text-xl clicked">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="relative w-12 h-full cursor-pointer select-none flexc transall active:scale-90">
          <span className="overflow-hidden border border-teal-500 rounded-full transcenter size-10 flexc">
            <img
              className="object-cover pointer-events-none select-none size-full"
              src="/images/mr-incredible.jpg"
              alt="mr incredible"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default NavOptions;
