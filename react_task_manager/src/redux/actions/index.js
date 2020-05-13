export {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    addCategory,
    deleteCategory,
    editCategory
} from './categoryActions';

export {
    ADD_NOTE,
    DELETE_NOTE,
    TOGGLE_NOTE,
    EDIT_NOTE,
    addNote,
    deleteNote,
    toggleNote,
    editNote
} from './notesActions';

export {
    TOGGLE_SLOGAN,
    TOGGLE_CAT_FIELD,
    TOGGLE_NOTE_FIELD,
    toggleNoteField,
    toggleCatField,
    toggleSlogan
} from './viewFieldsActions';

export {
    SET_FILTER,
    setFilterAC
} from './filterActions';

export {
    CHANGE_EMAIL_INPUT,
    CHANGE_PASSWORD_INPUT,
    LOGIN_SUCCESS,
    LOG_OUT,
    changeEmailInputAC,
    changePasswordInputAC,
    loginRequestAC,
    logOutAC
} from './loginFormActions';

export {
    CHANGE_REG_EMAIL_INPUT,
    CHANGE_REG_NAME_INPUT,
    CHANGE_REG_PASSWORD_INPUT,
    CHANGE_CONFIRM_PASSWORD_INPUT,
    changeRegEmailInputAC,
    changeRegNameInput,
    changeRegPasswordInput,
    changeConfirmPasswordInput
} from './registrationFormActions'

