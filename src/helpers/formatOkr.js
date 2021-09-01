const formatOkrData = (okrList) => {
  let categoryObj = {},
    categoriesValues = [];
  let tempObj = okrList.reduce((acc, item) => {
    if (!item.parent_objective_id) {
      acc[item.id] = { ...item, children: [] };
      if (!categoryObj[item.category]) {
        categoryObj[item.category] = true;
        categoriesValues.push(item.category);
      }
    }
    return acc;
  }, {});
  okrList.forEach((listItem) => {
    if (listItem.parent_objective_id && tempObj[listItem.parent_objective_id]) {
      tempObj[listItem.parent_objective_id].children.push({ ...listItem });
    }
  });
  return [tempObj, categoriesValues];
};

// const formatOkrData = (okrList) => {
//   let categoryObj ={},categoriesValues=[];
//   let tempObj =  okrList.reduce((acc, item,index) => {
//     console.log(item.parent_objective_id,item.id,index)
//     if (!item.parent_objective_id) {
//       if (acc[item.id]) {
//         acc[item.id] = {...acc[item.id], ...item}
//       } else {
//         acc[item.id] = {...item, children:[]};
//       }
//     }
//     else {
//       if(acc[item.parent_objective_id]){
//         acc[item.parent_objective_id].children.push({...item})
//       }else{
//         acc[item.parent_objective_id] = {children:[{...item}]}
//       }
//     }
//     if(!categoryObj[item.category]) {
//       categoryObj[item.category] = true;
//       categoriesValues.push(item.category)
//     }
//     return acc
//   }, {});
//   return [tempObj,categoriesValues]
// };

export default formatOkrData;
