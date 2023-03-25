import React from "react";
import SideMenuLayout from "../../Components/Layout/Layout";
import { useGetProductById } from "../../hooks/useGetProductById";
import ItemDetails from "../../Components/Card/itemsdetail";

function productDetails() {
  return (
    <div>
      <p className="text-white text-center py-10 text-3xl uppercase font-semibold">
        <svg
          id="star"
          fill="orange"
          viewBox="0 0 1024 1024"
          width="30"
          className="mx-auto"
        >
          <title>Star</title>
          <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path>
        </svg>{" "}
      </p>

      <div className="">
        <ItemDetails />
      </div>
    </div>
  );
}
productDetails.getLayout = (page) => {
  return <SideMenuLayout>{page}</SideMenuLayout>;
};

export default productDetails;
