//resuable component using props

//this below is one way to do it

// function Hello1(props) {
//   return (
//     <h1>Hello {props.name} {props.phone}</h1>
//   )
// }

//but it is easier to do it using destructuring(meaning directly using property names instead of using props.name, props.phone etc)
function Hello1({name, phone, seatNumbers}) {
  return (
    <h1>Hello {name} {phone} {seatNumbers}</h1>
  )
}


export default Hello1