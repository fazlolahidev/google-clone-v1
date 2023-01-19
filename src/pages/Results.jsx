import React from "react";

//* Components *//
import Search from "../components/Search";

//* Router *//
import { Link, useLocation } from "react-router-dom";

//* Query *//
import { useQuery } from "react-query";
import axios from "axios";

//* Images *//
import googleLogo from "../Images/google-logo.png";
import Loading from '../Images/loading.gif'

//* Icons *//
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const Results = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q");

  const {data, isLoading} = useQuery(['get-result', searchQuery], () => axios.get(`https://api.valueserp.com/search?api_key=${import.meta.env.VITE_KEY}&q=${searchQuery}`))


  return (
    // container
    <div>
      {/* SEARCH HEADER */}
      <div className="sticky top-0 p-5 pb-0 border-b bg-white">
        <div className="flex flex-col sm:flex-row items-center">
          <div>
            <Link to="/">
              <img
                src={googleLogo}
                alt="google logo"
                className="h-[75px] object-contain"
              />
            </Link>
          </div>

          <div className="w-full sm:grow">
            <Search hideButtons />
          </div>
        </div>

        <div className="md:ml-[170px] flex items-center gap-3 overflow-auto no-scrollbar mt-5">
          <div className="flex items-center gap-1 pb-2">
            <SearchIcon sx={{ width: "15px", height: "15px", color: "gray" }} />
            <span style={{ color: "gray" }}>All</span>
          </div>
          <div className="flex items-center gap-1 pb-2">
            <ArticleIcon
              sx={{ width: "15px", height: "15px", color: "gray" }}
            />
            <span style={{ color: "gray" }}>News</span>
          </div>
          <div className="flex items-center gap-1 pb-2">
            <ImageIcon sx={{ width: "15px", height: "15px", color: "gray" }} />
            <span style={{ color: "gray" }}>Images</span>
          </div>
          <div className="flex items-center gap-1 pb-2">
            <LocalOfferIcon
              sx={{ width: "15px", height: "15px", color: "gray" }}
            />
            <span style={{ color: "gray" }}>Shopping</span>
          </div>
          <div className="flex items-center gap-1 pb-2">
            <RoomIcon sx={{ width: "15px", height: "15px", color: "gray" }} />
            <span style={{ color: "gray" }}>Map</span>
          </div>
          <div className="flex items-center gap-1 pb-2">
            <MoreVertIcon
              sx={{ width: "15px", height: "15px", color: "gray" }}
            />
            <span style={{ color: "gray" }}>More</span>
          </div>
          <div className="flex items-center gap-1 pb-2 ml-[70px] lg:ml-[150px]">
            <span>Tools</span>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <ul className="max-w-[980px] mx-auto p-5 flex flex-col gap-3">
        {!isLoading && data.data.organic_results.map((item, index) => {
          return (
            <li key={index} className="flex flex-col gap-1">
              <div>
                <a href="https://google.com" className="inline-flex flex-col text-[#4285F4]">
                  <span>{item.displayed_link}</span>
                  <span>{item.title}</span>
                </a>
              </div>
              <p>{item.snippet}</p>
            </li>
          );
        })}

        {
          isLoading && (
            <div className='centerLoading' >
              <img src={Loading} alt="loading gif" />
            </div>
          )
        }
      </ul>
    </div>
  );
};

export default Results;
