import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import {createProduct} from "../actions/products";
import {createContact} from '../actions/contacts'
import {createVehicle} from '../actions/vehicles'
import {createComment} from '../actions/comments'
function mapDispatchToProps(dispatch) {
  return {
    createProduct: function (product) {
      dispatch(createProduct(product));
    },
    createVehicle: function (v) {
      dispatch(createVehicle(v));
    },
    createContact: function (contact) {
      dispatch(createContact(contact));
    },
    createComment: function (c) {
      dispatch(createComment(c));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);
