# react-ignore-rerender

>

[![NPM](https://img.shields.io/npm/v/react-ignore-rerender.svg)](https://www.npmjs.com/package/react-ignore-rerender) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i -S react-ignore-rerender
```

## Usage

```jsx
import React, { Component } from 'react';
import IgnoreRerender from 'react-ignore-rerender';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      showDescription: false,
    };
  }
  render () {
    const {showTitle, showDescription} = this.state;
    return (
      <IgnoreRerender whiteList={{ showTitle, showDescription }}>
        { showTitle && <h1>Title</h1> }
        { showDescription && <p>Description</p> }
      </IgnoreRerender>
    )
  }
}
```
###### NOTE:

This component doesn't rerender when changing any props or state except changing state.showTitle or state.showDescription.

## License

MIT © [soroushchehresa](https://github.com/soroushchehresa)
