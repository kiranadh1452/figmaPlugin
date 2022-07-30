import { getFirstName, getLastName, getFullName } from './helperFunction';
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // currently only ui is designed
    // message has not yet been passed
    let message = '';
    switch (msg.type) {
        case "first-name":
            message = getFirstName();
            break;
        case "last-name":
            message = getLastName();
            break;
        case "full-name":
            message = getFullName();
            break;
        case "email":
        // code
        case "phone":
        // code
        case "address":
        // code
        case "date":
        // code
        default:
        // code
    }
    console.log(message);
    // figma.closePlugin();
};
