import { useGetProductById } from "../../hooks/useGetProductById";
import Link from "next/link";

const ItemDetails = () => {
  const { loading, data } = useGetProductById();
  if (loading || !data) return <p>Loading ....</p>;
  const { thumbnail, title, description, price } = data;
  return (
    <div className="w-[1140px] mx-auto">
      <Link href="/product" className="text-white">
        <button>GO Back</button>
      </Link>
      <div className="w-[1140px] mx-auto flex my-40">
        <div className="w-96">
          <img className="w-screen" src={thumbnail} alt={title} />
        </div>
        {/* <Link href={routes.product.productDetails(id)}> */}
        <div className="p-6">
          <h2 className="text-3xl text-white font-semibold">{title}</h2>
          <p className="text-white py-5 font-medium">{description}</p>
          <p className="text-3xl text-[#DA003785] py-3">${price}</p>
          <div className=" flex-row">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-10 rounded-md flex gap-4 
        mt-4"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
              Add to cart
            </button>
            <p className="text-white text-end">In STOCK:</p>
          </div>
          <p className="text-white">Average Rating:</p>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ItemDetails;
