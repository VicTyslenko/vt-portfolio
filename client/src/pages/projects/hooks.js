import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch } from "reducers/dataReducer";
import { openModal } from "reducers/modalReducer";

export const useProjects = (location) => {
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(6);

  const handleModalOpen = () => {
    dispatch(openModal());
  };

  const handleLoadMore = () => {
    setPageSize((prevPage) => prevPage + 3);
  };

  useEffect(() => {
    dispatch(dataFetch({ collectionName: location, pageSize }));
  }, [dispatch, location, pageSize]);

  return { handleModalOpen, handleLoadMore };
};
