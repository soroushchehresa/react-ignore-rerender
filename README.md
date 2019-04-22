# Support
<a href="https://www.patreon.com/soroushchehresa">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

<br />
<br />
<br />

[![NPM](https://img.shields.io/npm/v/react-ignore-rerender.svg)](https://www.npmjs.com/package/react-ignore-rerender) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# react-ignore-rerender

Simple component for ignore re-rendering of a piece of React's render method.

## Install

npm:

```bash
npm i -S react-ignore-rerender
```


yarn:

```bash
yarn add react-ignore-rerender
```

## Usage

Without ```whiteList```:

```jsx
import React, { Component } from 'react';
import IgnoreRerender from 'react-ignore-rerender';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      showDescription: true,
    };
  }
  render () {
    const {showTitle, showDescription} = this.state;
    return (
      <div>
        { showTitle && <h1>Title</h1> }
        { showDescription && <p>Description</p> }
        <IgnoreRerender>
          <ul className="list">
            <li className="list-item">list item 1</li>
            <li className="list-item">list item 2</li>
            <li className="list-item">list item 3</li>
            <li className="list-item">list item 4</li>
            <li className="list-item">list item 5</li>
            <li className="list-item">list item 6</li>
            <li className="list-item">list item 7</li>
          </ul>
        </IgnoreRerender>
      </div>
    )
  }
}
```

###### NOTE:

```list``` does not rerender at all.

***

With ```whiteList```:

```jsx
import React, { Component } from 'react';
import IgnoreRerender from 'react-ignore-rerender';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      showDescription: true,
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

```ExampleComponent``` does not rerender when changing any props or state except ```showTitle``` and ```showDescription```.

## License

MIT © [soroushchehresa](https://github.com/soroushchehresa)
