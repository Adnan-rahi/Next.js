import React from "react";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import ItemCard from "../../Components/Card";
import SideMenuLayout from "../../Components/Layout/Layout";
import Link from "next/link";

function Product() {
  const { loading, data, error } = useGetAllProducts();
  console.log(data, loading, error, "aaaaaaaa");
  if (loading || !data?.products) return <text>Loading ....</text>;
  return (
    <div>
      <Link href="/" className="text-white ml-40 py-10">
        <button>Home</button>
      </Link>
      <div>
        <p className="text-white text-center py-10 text-3xl uppercase font-semibold">
          available <span className="text-[#DA003785]">items</span>
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 w-[1140px] mx-auto">
        {data.products.map((item, id) => (
          <ItemCard {...item} key={id} />
        ))}
      </div>
    </div>
  );
}
Product.getLayout = (page) => {
  return <SideMenuLayout>{page}</SideMenuLayout>;
};

export default Product;
