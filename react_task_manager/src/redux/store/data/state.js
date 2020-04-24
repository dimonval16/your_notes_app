const state = {
    categories: [
        {
            id: 1,
            title: 'Понедельник',
            notes: [
                {
                    id: 1,
                    title: 'Заметки для Понедельника',
                    completed: false
                }
            ]
        },
        {
            id: 2,
            title: 'Вторник',
            notes: [
                {
                    id: 1,
                    title: 'Заметки для Вторника',
                    completed: false
                }
            ]
        },
        {
            id: 3,
            title: 'Среда',
            notes: [
                {
                    id: 1,
                    title: 'Заметки для Среды',
                    completed: false
                }
            ]
        },
        {
            id: 4,
            title: 'Четверг',
            notes: [
                {
                    id: 1,
                    title: 'Заметки для Четверга',
                    completed: false
                }
            ]
        },
        {
            id: 5,
            title: 'Пятница',
            notes: [
                {
                    id: 1,
                    title: 'Заметки для Пятницы',
                    completed: true
                }
            ]
        },
        {
            id: 6,
            title: 'Суббота',
            notes: [
                {
                    id: 1,
                    title: 'Заметки для Субботы',
                    completed: true
                }
            ]
        },
        {
            id: 7,
            title: 'Воскресенье',
            notes: [
                {
                    id: 1,
                    title: 'Заметки для Воскресенья',
                    completed: true
                }
            ]
        }
    ],
    user: {
        id: 1,
        name: 'Dmytro',
        surname: 'Volynskyi',
        email: 'brazzers.com',
        photo: 'account_circle'
    },
    viewFields: {
        sloganHidden: false,
        notesFieldHidden: true,
        catFieldHidden: true
    },
    filter: 'ALL'
}

export default state;