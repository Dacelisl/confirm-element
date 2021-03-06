
![License - MIT](https://img.shields.io/github/license/dacelisl/confirm-element.svg) [![Published on NPM](https://img.shields.io/badge/NPM-Published-red.svg)](https://www.npmjs.com/package/confirm-element) [![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/dacelislconfirm-element)



# \<confirm-element\>

## Description.

confirmation window with two buttons and editable icons  


## Installation

`npm install confirm-element"@0.0.2"` 


![Screenshot of confirm-element](https://raw.githubusercontent.com/Dacelisl/confirm-element/master/confirm-element.gif)

### Configuration _<confirm-element>_:

* Use **open** to show the window.
* Use **title** to add title.
* Use **message** to add the body of the message to be displayed.
* Use **confirmtext** add text to the confirmation button.
* Use **canceltext** add text to the cancel button
* Use **icon** for the visibility of the icons, default value false.
* Use **iconcancel** and **iconconfirm** to add the icons to each button correspondingly, the available icons correspond to the portfolio of  [VAADIN ICONS](https://cdn.vaadin.com/vaadin-lumo-styles/1.4.2/demo/icons.html),  default values *lumo:cross* and *lumo:checkmark*, if you prefer buttons without icon: *iconconfirm="none"* or *iconcancel="none"* 


### Events  
**cancel**:  *CustomEvent*
the cancel event is activated by pressing the cancel button or the ESC key.

**confirm**: *CustomEvent*  
the event is activated by pressing the confirm button


```html
<confirm-element 
    open
    title="Warming"
    message="Do you want to save changes?" 
    confirmtext="Save" 
    canceltext="Discart" 
    icon 
    iconcancel="none" 
    iconconfirm="lumo:edit"
></confirm-element>
```

## Usage

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '.././confirm-element.js';
    </script>
  </head>
  <body>

    <confirm-element 
      id="showconfirm" 
      confirmtext="OK" 
      canceltext="Cancel" 
      title="Close"
      message="Are you sure you want to close this window?" 
      icon iconcancel="none" 
      iconconfirm="lumo:checkmark"
    ></confirm-element>

  </body>
</html>
```

### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '.././confirm-element.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`

        <confirm-element 
            id="showconfirm" 
            title="Close"
            message="Are you sure you want to close this window?" 
            confirmtext="OK" 
            canceltext="Cancel" 
            icon 
            iconcancel="none" 
            iconconfirm="lumo:checkmark"
        ></confirm-element>
    `;
  }
  ready(){
      this.message = this.$.showconfirm;
      this.message.addEventListener('confirm', () => this.confirmDialog());
  }
  confirmDialog(){
      ............
  }
}
customElements.define('sample-element', SampleElement);
```
## License

MIT License






