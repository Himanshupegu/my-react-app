function Food() {
  const food1 = 'Chicken'
  const food2 = 'Rice'
  
  return (
    <div>
      <h1>Food</h1>
      <ul>
        <li>Chicken</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
    </div>
  )
}

export default Food
