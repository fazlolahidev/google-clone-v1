import React from "react";

//* Components *//
import Search from "../components/Search";

//* Router *//
import { Link } from "react-router-dom";

//* Icons *//
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";

//* Images *//
import googleLogo from "../Images/google-logo.png";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* HEADER */}
      <div className="flex justify-between p-5">
        {/* HEADER LEFT */}
        <div className="flex items-center gap-3">
          <Link className="hover:underline" to="/about">
            About
          </Link>
          <Link className="hover:underline" to="/store">
            Store
          </Link>
        </div>

        {/* HEADER RIGHT */}
        <div className="flex items-center gap-3">
          <Link className="hover:underline" to="/about">
            Gmail
          </Link>
          <Link className="hover:underline" to="/store">
            Images
          </Link>
          <AppsIcon />
          <Avatar sx={{ width: 24, height: 24 }} />
        </div>
      </div>

      {/* BODY */}
      <div className="grow flex flex-col">
        {/* IMAGE */}
        <center>
          <img
            src={googleLogo}
            alt="google logo"
            className="h-[200px] object-contain mt-[10]"
          />
        </center>

        {/* SEARCH */}
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
