
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `
<dom-module id="style">
  <template>
    <style>

    [part="header"],
    .header {
    display: flex;
    flex-wrap: wrap;      
    }
    .header{
      margin-top: 0px;
    }
    [part="message"] {
       width: 15em;
       max-width: 100%;
       margin-right: 24px;
    }
    [part="footer"] {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin: calc(1.5rem * -1);
      margin-top: 1.5rem;
      padding: 0 1.5rem;
      background-color: #193b670d;
      padding-bottom: 5px;
      padding-top: 4px;
    }
    [part="footer"] div:nth-child(-n + 2) paper-button,
    [part="footer"] div:nth-child(-n + 2) ::slotted(*) {
      margin-right: 8px;
    }
      [part="overlay"] {
        max-width: 100%;
        min-width: 0;
      }
      [part="content"], #content {
        padding: 10px 24px 24px 15px;
        min-width: 0;
      }
      
    @media (max-width: 360px) {
      [part="footer"] {
        flex-direction: column-reverse;
        align-items: flex-end;
      }
      [part="footer"] div:nth-child(-n + 2) paper-button,
      [part="footer"] div:nth-child(-n + 2) ::slotted(*) {
        margin-top: 8px;
        margin-right: 0;
      }
      [part="footer"] div:nth-last-child(1) paper-button,
      [part="footer"] div:nth-last-child(1) ::slotted(*) {
        margin-top: 8px;
      }
      [part="footer"] .confirm-button {
        margin-top: 0.5rem;
      }
      [part="footer"] .cancel-button {
        margin-bottom: 0.5rem;
      }
    }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
