

//let {createStore} = window.Redux
//let {connect, Provider} = window.ReactRedux

     const {createStore} = Redux;
     const store = createStore(allReducer);
 class Reduxcomp extends React.Component {

    render() {
        return (
            <div className="class-name">
                <h1>Hello</h1>
            </div>
        );
    }
}

ReactDOM.render(<Reduxcomp />,document.getElementById('root'));
