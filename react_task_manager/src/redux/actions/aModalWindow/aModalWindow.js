export const ACTIVATE_MODAL_WINDOW = 'ACTIVATE_MODAL_WINDOW';
export const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW';

export function closeModalWindowAC() {
    return {
        type: CLOSE_MODAL_WINDOW
    }
}

export function activateModalAC(title, reason) {
    return {
        type: ACTIVATE_MODAL_WINDOW,
        title,
        reason
    }
}

