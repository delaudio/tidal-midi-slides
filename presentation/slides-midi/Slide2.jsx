// Import React
import React,{Component} from 'react';

// Import Spectacle Core tags
import {
  Heading,
  List,
  ListItem,
  Slide
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('../../node_modules/normalize.css/normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'IBM Plex Sans',
    secondary: 'Roboto'
  }
);

export default class Slide2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Slide transition={['zoom']} bgColor="primary">
        <List>
          <ListItem>What is TidalCycles</ListItem>
          <ListItem>Why TidalCycles</ListItem>
          <ListItem>Architecture</ListItem>
          <ListItem>Haskell</ListItem>
          <ListItem>SuperCollider</ListItem>
          <ListItem>Virtual Midi Bus</ListItem>
          <ListItem>Tidal and Midi</ListItem>
        </List>
      </Slide>
    );
  }
}
