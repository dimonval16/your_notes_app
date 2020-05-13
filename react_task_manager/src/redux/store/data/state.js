const state = {
    categories: [
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
    ],
    user: {
        id: 1,
        name: 'Dimas',
        email: '',
        pass: '',
        photo: 'account_circle'
    },
    viewFields: {
        sloganHidden: false,
        notesFieldHidden: true,
        catFieldHidden: true
    },
    filter: 'ALL',
    loginForm: {
        email: '',
        pass: '',
        isAuth: false
    },
    regForm: {
        email: '',
        name: '',
        pass: '',
        confirmPass: '',
    },

}

export default state;