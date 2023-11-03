import React from "react";
import { useSelector } from "react-redux";
import { BsExclamationSquareFill } from 'react-icons/bs'
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSignal3, BiSignal2,BiSignal1 } from "react-icons/bi";

import "./DashView.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {!user ? (
                    elem[index]?.title === "Urgent" ? (
                      <BsExclamationSquareFill className="exclamation" />
                    ) : elem[index]?.title === "High" ? (
                      <BiSignal3 className="high" />
                    ) : elem[index]?.title === "Medium" ? (
                      <BiSignal2 className="medium" />
                    ) :elem[index]?.title === "Low" ? (
                      <BiSignal1 className="medium" />
                    ) : (
                      <BsThreeDots/>
                    )
                  ) : (
                    <>
                      <div
                        className="imageContainer relative"
                        style={{ width: "15px", height: "15px", display: 'inline-block' }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="UserImage"
                        />
                      </div>
                    </>
                  )}
                  <span>
                    {" "}
                    {elem[index]?.title} {elem[index]?.value?.length}
                    {console.log(elem[index])}
                  </span>
                </div>
                <div className="rightView">
                  <AiOutlinePlus />{" "}
                  <BsThreeDots/>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((elem, ind) => {
                  return (
                    <Card id={elem.id} title={elem.title} tag={elem.tag} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;
