import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { dataFetch } from "reducers/dataReducer";

export const useGetCollections = (params) => {
  const dispatch = useDispatch();

  const { collectionName, currentPages } = params;

  const [pageSize, setPageSize] = useState(currentPages);

  const collections = useSelector((state) => state.collections.data);

  const handleLoadMore = (newValue) => {
    setPageSize((prev) => prev + newValue);
  };

  useEffect(() => {
    dispatch(dataFetch({ collectionName, pageSize: pageSize }));
  }, [dispatch, collectionName, pageSize]);

  return { collections, handleLoadMore };
};
