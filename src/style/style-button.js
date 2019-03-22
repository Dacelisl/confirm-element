
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `
<dom-module id="buttons">
  <template>
    <style>
    paper-button.red:hover {
      background-color: hsla(3, 100%, 60%, 0.5);
    }
    paper-button.red {
      background-color: hsl(3, 100%, 61%);
    }
    paper-button.green {
      background-color: hsl(145, 80%, 42%);
    }
    paper-button.green:hover {
      background-color: hsla(145, 76%, 44%, 0.55);
    }
    paper-button.custom {
        color: white;
        height: 40px;
    }
    .cancel-button {
      flex-grow: 1;
      margin-left: calc(0.5rem * -1);
    } 
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
