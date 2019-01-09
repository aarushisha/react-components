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


// var Cucumber = (props) => (
//   <li>{props.item}</li>
// )

// var Kale = (props) => (
//   <li>{props.item}</li>
// )

// var GroceryList = () => (
//   <div>
//     <Cucumber item = "cucumber"/>
//     <Kale item = "kale"/>
//   </div>
// );

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// )

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <ul>
//         <li>{this.props.groceryItems[0]}</li>
//         <li>{this.props.groceryItems[1]}</li>
//       </ul>
//     );
//   }
// }

// var GroceryList = () => (
//   <div>
//     <GroceryListItem groceryItems={['avocado', 'orange']}/>
//   </div>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
  }
  onListItemHover() {
    this.setState({done: !this.state.done});
  }


  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };
    // var count = 1;
    // console.log(this.props + count++);
    return (

        <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.groceryItems}</li>
        // <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.groceryItems[1]}</li>

    );
  }
}

var GroceryList = (props) => (
  <ul>
    {/* {console.log(props)} */}
    {props.groceryItems.map(item => {
      // console.log(item);
     return <GroceryListItem groceryItems={item}/>
    })}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['bananas', 'apples', 'orange']}/>, document.getElementById("app"));
