import InputSearch from "../../elements/InputSearch";
import Dropdown from "../Dropdown";

function Nav() {
  return (
    <>
      <nav className="w-[95rem] h-[5rem] flexc">
        <ul className="flexc flex-[1] h-full">
          <li className="min-h-[2rem] flexc flex-[3]"></li>
          <li className="h-[3rem] flexc flex-[1]">
            {/* <Autocomplete
              size="medium"
              disablePortal
              options={[
                { label: "Latest" },
                { label: "Oldest" },
                { label: "apapun lah" },
              ]}
              sx={{
                width: 300,
              }}
              renderInput={(params) => (
                <TextField {...params} label="Order Date" />
              )}
              onChange={(event, value) => {
                switch (value?.label) {
                  case "Latest":
                    alert("ini adalah Latest");
                    break;

                  case "Oldest":
                    alert("ini adalah Oldest");
                    break;

                  default:
                    alert("ini adalah nating");
                    break;

                  // return;
                }
              }}
            /> */}

            <Dropdown />
          </li>
          <li className="flex-[1] h-[3rem]">
            <InputSearch />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
