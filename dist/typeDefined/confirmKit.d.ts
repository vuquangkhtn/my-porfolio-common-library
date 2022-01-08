import Popup from './Popup';
import confirmable from './confirmable';
import createConfirmation from './createConfirmation';

interface confirmKit {
    Popup: Popup
    confirmable: confirmable
    createConfirmation: createConfirmation
}

export default confirmKit;