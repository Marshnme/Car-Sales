import React from 'react';
import {connect} from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature,removeFeature} from "./actions";

const App = ({addFeature, removeFeature, store, car}) => {
  

  const removeItem= item => {
    removeFeature(item)
  };
    
  const buyItem = item => {
    addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        {/* car={state.car} */}
        <Header  />
        {/* car={state.car} */}
        <AddedFeatures removeItem={removeItem} />
      </div>
      <div className="box">
      {/* store={state.store} */}
        <AdditionalFeatures  buyItem={buyItem}  />
        {/* car={state.car} additionalPrice={state.additionalPrice} */}
        <Total  />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  // console.log("App" , state);

  return{
    car:  state.car,
    store: state.store
  }
}


export default connect(
  mapStateToProps,
  {addFeature, removeFeature}
)( App);



