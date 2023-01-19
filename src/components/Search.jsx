import React, { useState } from "react";

//* Router *//
import { useNavigate } from "react-router-dom";

//* Icons *//
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

//* Buttons *//
import Button from "@mui/material/Button";

const Search = ({ hideButtons = false }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const search = (e) => {
    e.preventDefault();

    console.log("ali sent the form");
    navigate(`/search?q=${value}`);
  };

  return (
    <form className="px-2" onSubmit={search}>
      {/* SEARCH INPUT */}
      <div className={`hover:shadow-md focusShadow max-w-[650px] flex items-center border rounded-full p-2 ${!hideButtons && 'mx-auto'}`}>
        <SearchIcon sx={{color: 'gray'}} />
        <input
          type="text"
          className={`grow ${!hideButtons && 'p-2'}  ${hideButtons && 'px-1'} outline-none bg-transparent`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <MicIcon />
      </div>

      {/* SEARCH BUTTON */}
      {!hideButtons && (
        <div className="max-w-[560px] mx-auto mt-5 flex justify-center gap-3">
          <Button type="submit" variant="contained">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
