// Import React
import React,{Component} from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

import Terminal from 'spectacle-terminal';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../../assets/formidable-logo.svg'),
  goodWork: require('../../assets/good-work.gif'),
  tidalCycles: 'https://pbs.twimg.com/profile_images/773453591105404929/szSVFsHE_400x400.jpg',
  algorave: 'https://66.media.tumblr.com/17b8414f7191d280e102ef9861c066f9/tumblr_msf4s68mw11qav3uso1_500.gifv',
  lildata: 'https://camo.githubusercontent.com/62c877b127feb6c2e9ec8b25162c4eb3639f8879/68747470733a2f2f69312e736e6463646e2e636f6d2f617274776f726b732d3030303535353936313338302d6d657434356e2d6f726967696e616c2e6a7067',
  supercolliderScreen: 'https://cdn.freewarefiles.com/screenshot/supercollider.jpg',
  p5js: 'https://pbs.twimg.com/profile_images/502135348663578624/-oslcYof_400x400.png',
  p5Example: 'https://miro.medium.com/max/7668/1*FHOVMw8MZLHcUw3Ytwh-Aw.png',
  p5Example2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c216b23-c9b1-4057-b8d6-f7750a0bb870/d9sdlju-625180da-d375-482b-8e4f-13e93999f88b.png/v1/fill/w_893,h_895,q_70,strp/generative_art_in_processing_by_jowarric_d9sdlju-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTk3IiwicGF0aCI6IlwvZlwvNWMyMTZiMjMtYzliMS00MDU3LWI4ZDYtZjc3NTBhMGJiODcwXC9kOXNkbGp1LTYyNTE4MGRhLWQzNzUtNDgyYi04ZTRmLTEzZTkzOTk5Zjg4Yi5wbmciLCJ3aWR0aCI6Ijw9OTk0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.V8NmRsrdbZRQAd1ZW_V7YaHX2D60nbTexiT3mCkH8EY',
  prophet600: 'http://www.vintagesynth.com/sites/default/files/2017-05/sci_prophet_600.jpg',
  modular: 'https://assets.newatlas.com/dims4/default/1916b9f/2147483647/strip/true/crop/7949x5304+1+0/resize/1160x774!/quality/90/?url=https%3A%2F%2Fassets.newatlas.com%2Fb6%2Ffd%2F5f4fedfa4df6b9ebc3b8d034950d%2Fmodel-10-beauty-4-1.jpg'
};

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

export default class Slide9 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Slide>
        <Heading fit caps textColor="secondary" margin="0 0 20px 0">
          SuperCollider
        </Heading>
        <Image src={images.supercolliderScreen} width={500} />
      </Slide>
    );
  }
}
