export const CASE_DATA = [
    {
        '@id': '1',
        'id': 191,
        'familyFinderStaffName': 'Dolores',
        'caseManager': 'Jen',
        'status': 'Open',
        'dateOpened': '2016-08-05',
        'dateClosed': null,
        'subjects': [
            {
                '@id': '2',
                'id': 255,
                'person': {
                    '@id': '3',
                    'id': 182,
                    'name': 'Bart Simpson',
                    'dateOfBirth': '1987-04-19',
                    'family': [],
                    'friends': [],
                    'givenNames': 'Bart',
                    'familyName': 'Simpson'
                },
                'aCase': {
                    '@ref': '1'
                },
                'date': '2016-08-05'
            }
        ]
    }
]
export const PEOPLE_DATA = [
    {
        '@id': '1',
        'id': 180,
        'name': 'Maggie Simpson',
        'dateOfBirth': '1987-04-19',
        'family': [],
        'friends': [],
        'givenNames': 'Maggie',
        'familyName': 'Simpson'
    },
    {
        '@id': '2',
        'id': 189,
        'name': 'Patty Bouvier',
        'dateOfBirth': '1987-04-19',
        'givenNames': 'Patty',
        'familyName': 'Bouvier',
        'family': [
            {
                '@id': '3',
                'id': 248,
                'kin': {
                    '@ref': '2'
                },
                'person': {
                    '@id': '4',
                    'id': 181,
                    'name': 'Lisa Simpson',
                    'dateOfBirth': '1987-04-19',
                    'family': [],
                    'friends': [],
                    'givenNames': 'Lisa',
                    'familyName': 'Simpson'
                },
                'relationship': 'aunt'
            },
            {
                '@id': '5',
                'id': 247,
                'kin': {
                    '@ref': '2'
                },
                'person': {
                    '@ref': '1'
                },
                'relationship': 'aunt'
            },
            {
                '@id': '6',
                'id': 249,
                'kin': {
                    '@ref': '2'
                },
                'person': {
                    '@id': '7',
                    'id': 182,
                    'name': 'Bart Simpson',
                    'dateOfBirth': '1987-04-19',
                    'family': [],
                    'friends': [],
                    'givenNames': 'Bart',
                    'familyName': 'Simpson'
                },
                'relationship': 'aunt'
            }
        ],
        'friends': []
    },
    {
        '@id': '8',
        'id': 183,
        'name': 'Marge Simpson',
        'dateOfBirth': '1987-04-19',
        'givenNames': 'Marge',
        'familyName': 'Simpson',
        'family': [
            {
                '@id': '9',
                'id': 244,
                'kin': {
                    '@ref': '8'
                },
                'person': {
                    '@ref': '4'
                },
                'relationship': 'parent'
            },
            {
                '@id': '10',
                'id': 243,
                'kin': {
                    '@ref': '8'
                },
                'person': {
                    '@ref': '1'
                },
                'relationship': 'parent'
            },
            {
                '@id': '11',
                'id': 245,
                'kin': {
                    '@ref': '8'
                },
                'person': {
                    '@ref': '7'
                },
                'relationship': 'parent'
            }
        ],
        'friends': []
    },
    {
        '@id': '12',
        'id': 184,
        'name': 'Homer Simpson',
        'dateOfBirth': '1987-04-19',
        'givenNames': 'Homer',
        'familyName': 'Simpson',
        'family': [
            {
                '@id': '13',
                'id': 241,
                'kin': {
                    '@ref': '12'
                },
                'person': {
                    '@ref': '4'
                },
                'relationship': 'parent'
            },
            {
                '@id': '14',
                'id': 240,
                'kin': {
                    '@ref': '12'
                },
                'person': {
                    '@ref': '1'
                },
                'relationship': 'parent'
            },
            {
                '@id': '15',
                'id': 242,
                'kin': {
                    '@ref': '12'
                },
                'person': {
                    '@ref': '7'
                },
                'relationship': 'parent'
            },
            {
                '@id': '16',
                'id': 246,
                'kin': {
                    '@ref': '12'
                },
                'person': {
                    '@ref': '8'
                },
                'relationship': 'partner'
            }
        ],
        'friends': []
    },
    {
        '@ref': '4'
    },
    {
        '@id': '17',
        'id': 186,
        'name': 'Ralph Wiggum',
        'dateOfBirth': '1987-04-19',
        'family': [],
        'friends': [
            {
                '@id': '18',
                'id': 251,
                'kith': {
                    '@ref': '17'
                },
                'person': {
                    '@ref': '4'
                },
                'relationship': 'friend'
            }
        ],
        'givenNames': 'Ralph',
        'familyName': 'Wiggum'
    },
    {
        '@ref': '7'
    },
    {
        '@id': '19',
        'id': 187,
        'name': 'Groundskeeper Willie',
        'dateOfBirth': '1987-04-19',
        'family': [],
        'friends': [
            {
                '@id': '20',
                'id': 252,
                'kith': {
                    '@ref': '19'
                },
                'person': {
                    '@ref': '7'
                },
                'relationship': 'grounskeeper'
            }
        ],
        'givenNames': 'Groundskeeper',
        'familyName': 'Willie'
    },
    {
        '@id': '21',
        'id': 188,
        'name': 'Nelson Muntz',
        'dateOfBirth': '1987-04-19',
        'family': [],
        'friends': [
            {
                '@id': '22',
                'id': 253,
                'kith': {
                    '@ref': '21'
                },
                'person': {
                    '@ref': '7'
                },
                'relationship': 'friend'
            }
        ],
        'givenNames': 'Nelson',
        'familyName': 'Muntz'
    },
    {
        '@id': '23',
        'id': 185,
        'name': 'Milhouse Van Houten',
        'dateOfBirth': '1987-04-19',
        'family': [],
        'friends': [
            {
                '@id': '24',
                'id': 250,
                'kith': {
                    '@ref': '23'
                },
                'person': {
                    '@ref': '7'
                },
                'relationship': 'friend'
            }
        ],
        'givenNames': 'Milhouse',
        'familyName': 'Van Houten'
    },
    {
        '@id': '25',
        'id': 190,
        'name': 'Ned Flanders',
        'dateOfBirth': '1987-04-19',
        'family': [],
        'friends': [
            {
                '@id': '26',
                'id': 254,
                'kith': {
                    '@ref': '25'
                },
                'person': {
                    '@ref': '12'
                },
                'relationship': 'neighbour'
            }
        ],
        'givenNames': 'Ned',
        'familyName': 'Flanders'
    }
]

export const CASE_DETAILS_DATA = [
    { id: 1, 'familyFinderStaffName': 'Dolores', 'caseManager': 'Jen', 'status': 'Open', 'dateOpened': '2016-08-05', 'dateClosed': null, subjects: [] },
    { id: 2, 'familyFinderStaffName': 'Dolores', 'caseManager': 'Jen', 'status': 'Open', 'dateOpened': '2016-08-05', 'dateClosed': null, subjects: [] },
    { id: 3, 'familyFinderStaffName': 'Dolores', 'caseManager': 'Jen', 'status': 'Open', 'dateOpened': '2016-08-05', 'dateClosed': null, subjects: [] },
    { id: 4, 'familyFinderStaffName': 'Dolores', 'caseManager': 'Jen', 'status': 'Open', 'dateOpened': '2016-08-05', 'dateClosed': null, subjects: [] },
    { id: 5, 'familyFinderStaffName': 'Dolores', 'caseManager': 'Jen', 'status': 'Open', 'dateOpened': '2016-08-05', 'dateClosed': null, subjects: [] },
    { id: 6, 'familyFinderStaffName': 'Dolores', 'caseManager': 'Jen', 'status': 'Open', 'dateOpened': '2016-08-05', 'dateClosed': null, subjects: [] }
]

export const cases = [
    { caseId: '12345', staffName: 'Jenny', childName: 'Bob Jones', caseNumber: '234956' },
    { caseId: '12346', staffName: 'Jenny', childName: 'Ben James', caseNumber: '234957' },
    { caseId: '12347', staffName: 'Jenny', childName: 'Kate Smith', caseNumber: '234958' }
]

export const MOCK_BACKEND = false
