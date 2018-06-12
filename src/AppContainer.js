import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadProducts} from './actions/products';
import {fetchContacts} from './actions/contacts';
import {loadVehicles} from './actions/vehicles';
import {loadComments} from './actions/comments'
function mapDispatchToProps(dispatch) {
  return {
    getContacts: function(){
      let action = fetchContacts()
      dispatch(action)
      
    },
    getVehicles: function() {
      let action = loadVehicles()
      dispatch(action)
    },
    getComments: function() {
      let action = loadComments()
      dispatch(action)
    },
    getProducts: function() {
      let action = loadProducts()
      dispatch(action)
    }

  };
}

export default connect(null,mapDispatchToProps)(App);
