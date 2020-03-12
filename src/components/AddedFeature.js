import React from 'react';

const AddedFeature = ({feature, removeItem}) => {
  // console.log("FT props", props)
  // console.log("REMOVEItem fnc",props.removeItem);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={ () => {removeItem(feature)}} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
