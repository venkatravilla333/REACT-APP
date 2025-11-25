

function Child(props) {
  console.log(props)
  let age = 40
  return <h3>Child com: {props.name}, Age: {age}</h3>
}

export default Child