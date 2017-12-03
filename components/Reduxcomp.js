

//let {createStore} = window.Redux
//let {connect, Provider} = window.ReactRedux

     const {createStore} = Redux;
     let {connect, Provider} = window.ReactRedux;

     const store = createStore(allReducer);
     console.log(store.getState());
 class Reduxcomp extends React.Component {

    render() {
        return (
            <Provider store={store}>
              <App />
            </Provider>
        );
    }
}

ReactDOM.render(<Reduxcomp />,document.getElementById('root'));
