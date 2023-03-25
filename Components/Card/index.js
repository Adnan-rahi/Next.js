import Link from "next/link";
import { useState } from "react";
import { routes } from "../../utils/routes";

const ItemCard = ({ thumbnail, title, description, price, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // calculate the number of lines in the description
  const numLines = description.split(/\r\n|\r|\n/).length;

  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden bg-gray-900">
        <div className="relative h-0" style={{ paddingTop: "100%" }}>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={thumbnail}
            alt={title}
          />
        </div>
        <Link href={routes.product.productDetails(id)}>
          <div className=" px-4 py-6">
            <h2 className="text-4xl font-semibold text-white">{title}</h2>
            <p
              className={`text-white ${
                isExpanded || numLines <= 2 ? "" : "line-clamp-2"
              } text-gray-500 mt-2`}
            >
              {description}
              {numLines > 2 && (
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read less" : "Read more"}
                </span>
              )}
            </p>
            <p className="text-red-500 text-3xl font-medium mt-4">${price}</p>
            <button className="bg-red-500 hover:bg-red-600 text-white flex justify-center w-[100%] font-bold py-2 px-4 rounded-md mt-4">
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
          </div>
        </Link>
      </div>
    </>
  );
};

export default ItemCard;
