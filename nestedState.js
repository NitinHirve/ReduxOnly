const redux = require('redux');
const createStore = redux.createStore;

const produce = require('immer').produce  


const initialState = {
    name :"Nitin",
    address : {
        street :"Lane no 12",
        city :"Pune",
        state :"Maharashtra"
    }
}

const STREET_UPDATE = 'STREET_UPDATE';

const streetUpdate = (street)=>({
    type :STREET_UPDATE,
    payload : street
});

const reducer = (state= initialState,action)=>
{
    switch(action.type)
    {
        case STREET_UPDATE : 
        // return {
        //     ...state,
        //     address :{ 
        //         ...state.address,
        //         street:action.payload,
        //     }
        // } below is the replacement of commented code
        return produce(state,(draftCopyOfState)=>{
            draftCopyOfState.address.street = action.payload
        })
        default : return state;

    }
}

const store = createStore(reducer)
console.log('Initial store',store.getState())
store.subscribe(()=>console.log('Updated state',store.getState()))

store.dispatch(streetUpdate("Lane no 13"));
store.dispatch(streetUpdate("Lane no 14"));
store.dispatch(streetUpdate("Lane no 15"));

