// TODO
// TODO
// var GroceryList = (props) => (
//   <div>
//     <li>{props.item1}</li>
//     <li>{props.item2}</li>
//   </div>
// );
// // var item1 = 'banana';
// // var item2 = 'apple';
// ReactDOM.render(<GroceryList item1 = {'banana'} item2 = {'apple'}/>, document.getElementById("app"));


var Cucumber = (props) => (
  <li>{props.item}</li>
)

var Kale = (props) => (
  <li>{props.item}</li>
)

var GroceryList = () => (
  <div>
    <Cucumber item = "cucumber"/>
    <Kale item = "kale"/>
  </div>
);

ReactDOM.render(<GroceryList/>, document.getElementById("app"));