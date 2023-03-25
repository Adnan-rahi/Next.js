import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";
import {
  UpdateAllProductsData,
  UpdateAllProductsError,
  UpdateAllProductsLoading,
} from "../Constants/GetAllProducts";

export const useGetProductById = () => {
  const { query } = useRouter();
  const id = query.id;
  const [dataFetching, dispatchDataFetching] = useReducer(
    (state, action) => {
      switch (action.type) {
        case UpdateAllProductsData:
          return { ...state, data: action.payload };
        case UpdateAllProductsLoading:
          return { ...state, loading: action.payload };

        case UpdateAllProductsError:
          return { ...state, error: action.payload };
      }
    },
    {
      loading: false,
      data: {},
      error: false,
    }
  );

  useEffect(() => {
    if (id) {
      dispatchDataFetching({ type: UpdateAllProductsLoading, payload: true });
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((result) => {
          dispatchDataFetching({
            type: UpdateAllProductsLoading,
            payload: false,
          });
          dispatchDataFetching({
            type: UpdateAllProductsData,
            payload: result,
          });
        })
        .catch(() =>
          dispatchDataFetching({ type: UpdateAllProductsError, payload: true })
        );
    }
  }, [id]);

  return dataFetching;
};
