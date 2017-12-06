var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var hashHistory = ReactRouter.hashHistory
class Routeremp extends React.Component {
    componentWillMount() {
      console.log(window);
    }
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/home" component={Home}></Route>
                <Route path="/user" component={User}></Route>
            </Router>
        );
    }
}
ReactDOM.render(<Routeremp/>,document.getElementById('root'));
