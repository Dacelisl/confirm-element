/**
*  
* # \<confirm-element\>
* ## Description.
* 
* confirmation window with two buttons and editable icons
* 
* ### Configuration `<confirm-element>`:
* 
* * Use **open** to show the window.
* * Use **title** to add title.
* * Use **message** to add the body of the message to be displayed.
* * Use **confirmtext** add text to the confirmation button.
* * Use **canceltext** add text to the cancel button
* * Use **icon** for the visibility of the icons, default value false.
* * Use **iconcancel** and **iconconfirm** to add the icons to each button correspondingly, the available icons correspond to the portfolio of  [VAADIN ICONS](https://cdn.vaadin.com/vaadin-lumo-styles/1.4.2/demo/icons.html),  default values *lumo:cross* and *lumo:checkmark*, if you prefer buttons without icon _none_ 
* 
* 
* ### Events  
* **cancel**:  
* the cancel event is activated by pressing the cancel button or the ESC key.
* 
* **confirm**: CustomEvent  
* the event is activated by pressing the confirm button
* 
* 
* ```html
* <confirm-element 
*     open
*     title="Warming"
*     message="Do you want to save changes?" 
*     confirmtext="Save" 
*     canceltext="Discart" 
*     icon 
*     iconcancel="none" 
*     iconconfirm="lumo:edit"
* ></confirm-element>
* ```
*   @customElement
*   @polymer
*   @demo demo/index.html
 */


import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './src/style/style';
import './src/style/style-button';

import '@vaadin/vaadin-dialog';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-lumo-styles/icons';
import '@vaadin/vaadin-lumo-styles/typography';

class ConfirmElement extends PolymerElement {
  static get properties() {
    return {
      /**
       * indicates the visibility status of the confirmation window
       * @type {Boolean}
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true,
      },
      /**
       * message title
       * @type {string}
       */
      title: {
        type: String,
        value: 'Title Default'
      },
      /**
       * message body
       * @type {String}
       */
      message: {
        type: String,
        value: 'Message Default'
      },
      /**
       * text of the confirmation button, default 'Confirm'
       * @type {String}
       */
      confirmtext: {
        type: String,
        value: 'Confirm'
      },
      /**
       * text of the cancellation button, default 'Cancel'
       * @type {String}
       */
      canceltext: {
        type: String,
        value: 'Cancel'
      },
      /**
       * confirmation button icon
       * @type {String}
       */
      iconcancel: {
        type: String,
        value: ''
      },
      /**
       * cancel button icon
       * @type {String}
       */
      iconconfirm: {
        type: String,
        value: ''
      },
      /**
       * visibility of icons, default false
       * @type {Boolean}
       */
      icon: {
        type: Boolean,
        value: false,
        observer: '_iconChanged'
      }
    }
  }

  static get template() {
    return html`
    <style include="buttons style lumo-typography">
      :host {
        display: block;
      }
    </style>
      
    <vaadin-dialog-overlay  opened="{{opened}}" id="dialog" no-close-on-esc >
      <template class="template">
        <div part="header">
          <slot name="header">
            <h3 class="header">[[title]]</h3>
          </slot>
        </div>
        <div part="message" id="message">
          <slot></slot>
          [[message]]
        </div>
        <div part="footer" class="footer" >
          <div class="cancel-button">
            <slot name="cancel-button">
              <paper-button 
                id="cancel" 
                on-click="_cancel"
                raised 
                class="custom red" 
              ><iron-icon icon="[[iconcancel]]" ></iron-icon>[[canceltext]]</paper-button>
            </slot>
          </div>
          <div class="confirm-button">
            <slot name="confirm-button" id="confirm-button" >
              <paper-button 
                id="confirm" 
                on-click="_confirm" 
                raised 
                class="custom green"
              ><iron-icon id="iron"  icon="[[iconconfirm]]"></iron-icon>[[confirmtext]]</paper-button>
            </slot>
          </div>
        </div>
      </template>
    </vaadin-dialog-overlay> 
      `;
  }
  /**
   * @event confirm
   * the event is activated by pressing the confirm button
   */
  _confirm() {
    this.opened = false;
    this.dispatchEvent(new CustomEvent('confirm'));
  }
  /**
   * @event cancel
   * the cancel event is activated by pressing the cancel button or the ESC key.
   */
  _cancel() {
    this.opened = false;
    this.dispatchEvent(new CustomEvent('cancel'));
  }
  _iconChanged(e) {
    if (e) {
      if (this.iconcancel == '' || this.iconcancel == 'none') {
        if (this.iconcancel == '') {
          this.iconcancel = 'lumo:cross';
        } else {
          this._default('cancel');
        }
      }
      if (this.iconconfirm == '' || this.iconconfirm == 'none') {
        if (this.iconconfirm == '') {
          this.iconconfirm = 'lumo:checkmark';
        } else {
          this._default('confirm');
        }
      }
    } else {
      this._default('both');
    }
  }
  _default(e) {
    if (e == 'cancel') {
      this.iconcancel = '';
      this.shadowRoot.querySelector('vaadin-dialog-overlay').
        shadowRoot.querySelector('#overlay #content').
        shadowRoot.querySelector('.footer .cancel-button')
        .getElementsByTagName('paper-button')[0]
        .getElementsByTagName('iron-icon')[0].style.display = "none";

    } if (e == 'confirm') {
      this.iconconfirm = '';
      this.shadowRoot.querySelector('vaadin-dialog-overlay').
        shadowRoot.querySelector('#overlay #content').
        shadowRoot.querySelector('.footer .confirm-button')
        .getElementsByTagName('paper-button')[0]
        .getElementsByTagName('iron-icon')[0].style.display = "none";
    } if (e == 'both') {
      this._default('confirm');
      this._default('cancel');
    }
  }
}
customElements.define('confirm-element', ConfirmElement);