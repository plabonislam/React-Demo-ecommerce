import data from "../data.js";

const { PRODUCTLIST_REQ, PRODUCTLIST_SUS, PRODUCTLIST_UPD } = require("../constant/productConstant");


const listProducts=(it)=> async (dispatch)=>{

    dispatch({type:PRODUCTLIST_REQ});
    //api call
        
        if(it){
          console.log("MARHABA")
          const result = data.products.filter((item) =>
            item.Title.toLowerCase().includes(it.toLowerCase())
          );
           
    dispatch({
      type: PRODUCTLIST_SUS,
      payload: result,
    });
        }
        else{
          dispatch({
            type: PRODUCTLIST_SUS,
            payload: data.products,
          });
        }
       
}


const updateProducts = (item) => async (dispatch) => {
  

  dispatch({
    type: PRODUCTLIST_UPD,
    payload: item,
  });
};

export { updateProducts, listProducts };