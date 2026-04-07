const componentsPath = '../utils/'

module.exports = {
    description: 'Generate a new React component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Utils name:',
            validate: (value) => {
                if (!value) {
                    return 'Utils name is required'
                }
                return true
            },
        },
    ],
    actions: (data) => {
        let actions = [
             // index.ts
             {
                type: 'add',
                path: `${componentsPath}/utils/{{properCase name}}/index.ts`,
                templateFile: './utils/index.ts.hbs',
            },
            // component
            {
                type: 'add',
                path: `${componentsPath}/utils/{{properCase name}}/{{properCase name}}.tsx`,
                templateFile: './utils/{{type}}.tsx.hbs',
            },
            // test
            {
                type: 'add',
                path: `${componentsPath}/utils/{{properCase name}}/{{properCase name}}.test.tsx`,
                templateFile: './utils/{{type}}.spec.tsx.hbs',
            },
        ]
        return actions
    },
}
