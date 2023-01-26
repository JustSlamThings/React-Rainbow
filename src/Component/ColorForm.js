import React,{useState} from "react"

  //Function for the state
function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        // addColor, the function we just built, should be available within props.
        props.addColor(input)
    }

    return(
      <>
        <form onSubmit={handleSubmit}>
          {/* e is for event */}
          <input type='text' onChange={(e)=>{setInput(e.target.value)}} />
          <button type='submit'>Submit!</button>
        </form>
      </>
    )
  }

export default ColorForm