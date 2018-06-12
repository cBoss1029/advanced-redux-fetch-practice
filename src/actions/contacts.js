//get data

export function fetchContacts() {
    return function (dispatch) {
      dispatch({   // this dispatch is optional.  use case: start a spinner to tell user that something is coming
        type: "ABOUT_TO_FETCH_CONTACTS" 
      });
      fetch("http://localhost:4001/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsFetched(contacts));
      });
    };
   }

export function contactsFetched(contacts) {
    return {
      type: "CONTACTS_FETCHED",
      value: contacts
    };
   }

//create data

export function createContact(contact){
    return function(dispatch){
        fetch('http://localhost:4001/contacts', {
            method: 'post',
            body: JSON.stringify(contact),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(function(res){
            return res.json();
        }).then(function(c){
            dispatch(contactCreated(c))
        })
    }
}

export function contactCreated(contact){
    return {
        type: 'CONTACT_CREATED',
        value: contact
    }
}