import React from 'react';
import { Form, FormControl, Button ,Row} from 'react-bootstrap';

function SearchBar() {
  return (
    <Form >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

export default SearchBar;
