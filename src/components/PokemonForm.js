import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({postPokemon}) {

  const [pokeForm, setPokeForm] = useState({id: null, name: '',
  hp: '',
  sprites: {
    front: '',
    back: ''
  }})

  function handleChange(event){
    // const name = event.target.name;
    // let value = event.target.value;

    setPokeForm({
      ...pokeForm,
      [event.target.name]: event.target.value,
    });
  }

  function handleChangeSprite(event){
    setPokeForm({...pokeForm, sprites: {
      ...pokeForm.sprites, [event.target.name]: event.target.value
    }})
    
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          postPokemon(pokeForm);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokeForm.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokeForm.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={pokeForm.sprites.front}
            onChange={handleChangeSprite}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={pokeForm.sprites.back}
            onChange={handleChangeSprite}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
