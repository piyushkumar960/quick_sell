import React, { useEffect, useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import "./TopNav.css";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../Actions/DataAction";

const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    if (groupValue === "user") {
      dispatch(
        selectData(groupValue, {
          allTickets,
          allUser,
        }, orderValue)
      );
    } else {
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    <div className="top-header">
      <div className="display-button">
        <button
          className="button-style"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          <BsSliders2 /> Display <AiOutlineDown className="dropDownIcon" />
        </button>
        {displayOnClick && (
          <>
            <div className="drop-on-click">
              <div className="select-group">
                <span>Grouping</span>
                <select
                  value={groupValue}
                  onChange={(e) => handleGroupValue(e, true)}
                  className="select-style"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="select-group">
                <span>Ordering</span>
                <select
                  value={orderValue}
                  onChange={(e) => handleGroupValue(e, false)}
                  className="select-style"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
