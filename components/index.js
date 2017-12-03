var BrowserRouter = window.ReactRouterDOM.BrowserRouter;
var Route = window.ReactRouterDOM.Route
var Link = window.ReactRouterDOM.Link
var Match = window.ReactRouterDOM.Match
var Miss = window.ReactRouterDOM.Miss
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <BrowserRouter>
   <div>
     <ul>

       <li><Link to="/test">About</Link></li>

     </ul>

     <hr/>

     <Match exacty pattern="/" component={Test}/>

   </div>
 </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
