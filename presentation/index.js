// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import * as Old from './slides-old/index-slides';
import * as Midi from './slides-midi/index-slides';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'IBM Plex Sans',
    secondary: 'Roboto',
    tertiary: 'Arial'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Midi.Slide1/>
        <Midi.Slide2/>
        <Midi.Slide3/>
        <Midi.Slide4/>
        <Midi.Slide5/>
        <Midi.Slide6/>
        <Midi.Slide6a/>
        <Midi.Slide7/>
        <Midi.Slide8/>
        <Midi.Slide9/>
        <Midi.Slide10/>
        <Midi.Slide11/>
        <Midi.Slide12/>
      </Deck>
    );
  }
}
