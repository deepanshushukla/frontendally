import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'

//components
import LoadingSpinner from "../../components/LoadingSpinner";
import DropdownFilter from "../../components/DropdownFilter";
import Tree from "./Tree";
import OkrDetail from "./OkrDetail";

//service
import { getSampleOKR } from "services/okrService";

//helper
import formatOkrData from "../../helpers/formatOkr";
import { setOkrData, setFilteredOkrData } from '../../store/slices/okrslice'

//css
import "./index.scss";

const Dashboard = () => {
  const okrList = useSelector((state) => state.okr.data);
  const filteredList = useSelector((state) => state.okr.filteredData );

  const [isLoading, setLoader] = useState(false);
  const [categoriesValues, setCategoriesFilter] = useState(null);
  const [showModal, setModalVisibility] = useState(false);
  const [selectedNode, setSelectedNode] = useState(false);
  const dispatch = useDispatch();

  const changeCategory = (category) => {
    dispatch(setFilteredOkrData({category}))

  };
  const fetchOkrList = useCallback(async () => {
    dispatch(setOkrData(null));
    setLoader(true);
    try {
      let res = await getSampleOKR();
      const [data, filterList] = formatOkrData(res.data);
      dispatch(setOkrData(data));
      setCategoriesFilter(filterList);
    } catch (e) {
      dispatch(setOkrData(null))
    } finally {
      setLoader(false);
    }
  }, [dispatch]);

  const toggleModal = (e, item = {}) => {
    let updatedItem = { ...item };
    setModalVisibility(!showModal);
    if (item.parent_objective_id) {
      updatedItem = {
        ...updatedItem,
        parentObjectiveTitle: okrList[item.parent_objective_id].title,
      };
    }
    item && setSelectedNode(updatedItem);
  };
  useEffect(() => {
    fetchOkrList();
  }, [fetchOkrList]);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div>
        <div className="flex flex-justify-space-between">
          <DropdownFilter changeCategory={changeCategory} categoriesValues={categoriesValues}/>
        </div>
        <div className="list-container m-y-5">
          {filteredList && <Tree data={filteredList} toggleModal={toggleModal} />}
        </div>
        {showModal && selectedNode && (
          <OkrDetail toggleModal={toggleModal} selectedNode={selectedNode} />
        )}
      </div>
    </>
  );
};
export default Dashboard;
