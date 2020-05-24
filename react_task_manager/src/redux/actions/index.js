export {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    addCategory,
    deleteCategory,
    editCategory
} from './aCatAndNotes/categoryActions';

export {
    ADD_NOTE,
    DELETE_NOTE,
    TOGGLE_NOTE,
    EDIT_NOTE,
    addNote,
    deleteNote,
    toggleNote,
    editNote
} from './aCatAndNotes/notesActions';

export {
    TOGGLE_SLOGAN,
    TOGGLE_CAT_FIELD,
    TOGGLE_NOTE_FIELD,
    toggleNoteField,
    toggleCatField,
    toggleSlogan
} from './aViewFields/viewFieldsActions';

export {
    SET_FILTER,
    ALL,
    COMPLETED,
    NOT_COMPLETED,
    setFilterAC
} from './aFilter/filterActions';

export {
    CHANGE_EMAIL_INPUT,
    CHANGE_PASSWORD_INPUT,
    LOGIN_SUCCESS,
    LOG_OUT,
    LOGIN_FAILURE,
    LOADING,
    changeEmailInputAC,
    changePasswordInputAC,
    loginRequestAC,
    logOutAC,
} from './aForms/loginFormActions';

export {
    CHANGE_REG_EMAIL_INPUT,
    CHANGE_REG_NAME_INPUT,
    CHANGE_REG_PASSWORD_INPUT,
    CHANGE_CONFIRM_PASSWORD_INPUT,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    changeRegEmailInputAC,
    changeRegNameInput,
    changeRegPasswordInput,
    changeConfirmPasswordInput,
    requestSignUpAC,
    signUpSuccess
} from './aForms/registrationFormActions';

export {
    GET_USER_INFO,
    GET_CATEGORY_INFO,
    SET_PHOTO,
    CONFIRM_EMAIL,
    CHANGE_NAME,
    getUserRequestAC,
    getCategoryInfo,
    setPhotoAC,
    confirmEmailAC,
    changeNameAC,
    changePassAC
} from './aUser/userAction';

export {
    ACTIVATE_MODAL_WINDOW,
    CLOSE_MODAL_WINDOW,
    activateModalAC,
    closeModalWindowAC
} from './aModalWindow/aModalWindow';

