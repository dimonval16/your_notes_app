const state = {
    categories: {
        filterStatus: 'ALL',
        data: []
    },
    user: {
        email: '',
        enabled: false,
        id: 0,
        photo: 'account_circle',
        signUpDate: '',
        name: '',
    },
    viewFields: {
        sloganHidden: false,
        notesFieldHidden: true,
        catFieldHidden: true
    },
    authorized: {
        status: false
    },
    loginForm: {
        email: '',
        pass: '',
        errorTitle: ''
    },
    regForm: {
        email: '',
        name: '',
        pass: '',
        confirmPass: '',
        errorTitle: ''
    },
    modalWindow: {
        status: null,
        ok: null,
        reason: '',
        title: ''
    },
    fetching: {
        status: false
    }
}

export default state;

// -- example categories --
/*const categories = [
    {
        id: 1,
        title: 'Home',
        notes: []
    },
    {
        id: 2,
        title: 'Work',
        notes: []
    },
    {
        id: 3,
        title: 'Planned',
        notes: []
    },
    {
        id: 4,
        title: 'Chill',
        notes: []
    }
];*/