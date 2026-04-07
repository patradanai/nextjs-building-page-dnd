const componentsPath = '../src/'

module.exports = {
    description: 'Generate a new React module',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name:',
            validate: (value) => {
                if (!value) {
                    return 'Component name is required'
                }
                return true
            },
        },
        {
            type: 'list',
            name: 'type',
            message: 'Select component type',
            default: 'functional',
            choices: () => [
                { name: 'Functional component', value: 'functional' },
            ],
        },
    ],
    actions: (data) => {
        let actions = [
            // index.ts
            {
                type: 'add',
                path: `${componentsPath}/modules/{{properCase name}}/index.ts`,
                templateFile: './modules/index.ts.hbs',
            },
            // component
            {
                type: 'add',
                path: `${componentsPath}/modules/{{properCase name}}/{{properCase name}}.tsx`,
                templateFile: './modules/{{type}}.tsx.hbs',
            },
            // test
            {
                type: 'add',
                path: `${componentsPath}/modules/{{properCase name}}/{{properCase name}}.test.tsx`,
                templateFile: './modules/{{type}}.spec.tsx.hbs',
            },
        ]
        return actions
    },
}
