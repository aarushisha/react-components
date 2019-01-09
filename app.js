// TODO
// TODO
var GroceryList = (props) => (
  <div>
    <li>{props.item1}</li>
    <li>{props.item2}</li>
  </div>
);
// var item1 = 'banana';
// var item2 = 'apple';
ReactDOM.render(<GroceryList item1 = {'banana'} item2 = {'apple'}/>, document.getElementById("app"));
