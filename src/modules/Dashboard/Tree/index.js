import React from "react";
import PropTypes from 'prop-types';
import TreeNode from './treeNode'
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
Tree.propTypes = {
    data: PropTypes.object,
    toggleModal: PropTypes.func.isRequired,
    isChild: PropTypes.bool,
    classes: PropTypes.string,
};

export default Tree;
