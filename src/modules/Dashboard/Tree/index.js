import React, { useState } from "react";
import { indexToAlphabet } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretDown,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Tree = ({ data={}, toggleModal=()=>{}, isChild = false, classes = "" }) => {
  return (
      <ul className={`tree-container ${classes}`}>
      {Object.values(data).map((tree, index) => (
        <TreeNode
          key={tree.id}
          node={tree}
          index={index}
          toggleModal={toggleModal}
          isChild={isChild}
        />
      ))}
    </ul>
  );
};

const TreeNode = ({ node, index, toggleModal, isChild }) => {
  const [childVisible, setChildVisiblity] = useState(true);

  const hasChild = node.children?.length ? true : false;

  return (
    <li className="p-y-1">
      <div className="flex">
        <div
          className={"something"}
          style={{
            display: "inline-block",
            width: "10px",
            position: "relative",
          }}
        >
          {hasChild && (
            <div
              className={`icon-wrapper position-relative ${
                childVisible ? "active" : ""
              }`}
              onClick={(e) => setChildVisiblity((v) => !v)}
            >
              <span>
                {!childVisible ? (
                  <FontAwesomeIcon icon={faCaretRight} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
            </div>
          )}
        </div>

        <span className={"flex"} onClick={(e) => toggleModal(e, node)}>
          <span className="user-icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
          <span className="m-x-2 cursor-pointer">
            <span>
              {isChild ? indexToAlphabet[index] : index + 1}. {node.title}
            </span>
          </span>
        </span>
      </div>

      {hasChild && childVisible && (
        <Tree
          data={node.children}
          toggleModal={toggleModal}
          isChild={true}
          classes={"nested p-a-1 m-l-5"}
        />
      )}
    </li>
  );
};

export default React.memo(Tree);
