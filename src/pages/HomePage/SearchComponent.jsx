import React, { useState } from 'react';
import { Button, TextField} from "@material-ui/core";

function SearchComponent() {

  const [inputVal, setInputVal] = useState("")

  const handleInput = (e) => {
    console.log(e.target.value)
    setInputVal(e.target.value)
  }

  //make axios call here if you want the call to happen when user clicks submit button
  const handleSubmit = e => {
    console.log(inputVal)
    e.preventDefault()
  }

  return (
    <div>
      Search Component
      <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            helperText="Enter your full name"
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Subscribe
          </Button>
        </form>
        <h1>ENTERED: {inputVal}</h1>
    </div>
  );
}

export default SearchComponent;