import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Howtodownload from "./components/Howtodownload";
import Error from "./components/Error";
import Movierequest from "./components/Movierequest";
import Joinourgroup from "./components/Joinourgroup";
import Disclaimer from "./components/Disclaimer";
import Search from "./components/Search";

const App = () => {
  // Example array of items
  const items = [
    {
      imageUrl:
        "https://catimages.org/images/2024/02/23/rQs5OpTLLXPp0iyIPuI0RqvnNnZ.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/zcy8ZFwnzMhB32RaPArpj2XASP4.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/iWqcOxLbpHXMBdxTUPPDzmrptAx.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/gpHjWVPf8h8i40zOLBWKbkZGvW5.jpg",
    },
    {
      imageUrl: "https://catimages.org/images/2024/04/27/Ruslan.2024.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/jNvYVtRm1rvEYGLqBibL6b3Hhrv.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/original/ljx2uBVjvGADBarK0pTbdWdeMuV.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/hFuynYYxZIiWR4cRlwzmteH2diL.jpg",
    },
    {
      imageUrl: "https://catimages.org/images/2024/04/26/Untitled.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/ctOoWXqezfD7krv6Tw0l1nZJCOF.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/baV0cklaSoCbls6P0EdnqeHdZHy.jpg",
    },
    {
      imageUrl:
        "https://catimages.org/images/2023/10/01/Skanda-2023-Hindi-CAMRip-Full-Movie-HDHub4u.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/cpDtEjfzys5p8f5cv1T9l8Iqjel.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/zzr62EHNRYtUW6BRBK9JKDcqFTF.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/w400/7Sg769JoGe645odkAT7sO8rnO9Q.jpg",
    },
    {
      imageUrl:
        "https://image.tmdb.org/t/p/original/oKoCAVye7YCDLJlgZY55NP9Anik.jpg",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Slider items={items} />

        <Routes>
          <Route exact path="/" element={<Data />} />
          <Route path="/search" element={<Search />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/howtodownload" element={<Howtodownload />} />
          <Route path="/joinourgroup" element={<Joinourgroup />} />
          <Route path="/movierequest" element={<Movierequest />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        {/* Add Pagination component if needed, passing the active page as a prop */}
      </BrowserRouter>
    </div>
  );
};

export default App;
