
const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';


const orderCake = () => (
    {
        type: CAKE_ORDERED,
        payload: 1
    })

const restockCake = (qty = 1) => ({
    type: CAKE_RESTOCKED,
    payload: qty
})

const orderIceCream = ()=>({
    type :ICECREAM_ORDERED,
    payload :1
})

const restockIceCream = (qty=1)=>({
    type :ICECREAM_RESTOCKED,
    payload :qty
})


// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
// };

const initialCakeState ={
    numOfCakes :10,
};

const initialIceCreamState ={
    numOfIceCreams :20
}


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: return { ...state, numOfCakes: state.numOfCakes - 1 };
        case CAKE_RESTOCKED: return { ...state, numOfCakes: state.numOfCakes + action.payload }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED: return {...state,numOfIceCreams:state.numOfIceCreams-1}
        case ICECREAM_RESTOCKED: return {...state,numOfIceCreams:state.numOfIceCreams+action.payload}
        default: return state;
    }
}

const rootReducer = combineReducers({cakeReducer,iceCreamReducer})

const store = createStore(rootReducer,applyMiddleware(logger)); // creating the store
console.log('Initial state', store.getState());  // gives available states.

const unsubscribe = store.subscribe(() =>{})  // allows us to use the store.

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch); 
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(3);

unsubscribe();  // disconnects the store use

/** Restocking cakes */









