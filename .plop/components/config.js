const componentsPath = '../src/components/'

module.exports = {
    description: 'Generate a new React component',
    prompts: [
        {
            type: 'list',
            name: 'action',
            message: 'Select action',
            choices: () => [
                {
                    name: 'ui',
                    value: 'ui',
                },
                {
                    name: 'layouts',
                    value: 'layouts',
                },
                {
                    name: 'templates',
                    value: 'templates',
                }
            ],
        },
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
                path: `${componentsPath}/${data.action}/{{properCase name}}/index.ts`,
                templateFile: './components/index.ts.hbs',
            },
            // component
            {
                type: 'add',
                path: `${componentsPath}/${data.action}/{{properCase name}}/{{properCase name}}.tsx`,
                templateFile: './components/{{type}}.tsx.hbs',
            },
            // test
            {
                type: 'add',
                path: `${componentsPath}/${data.action}/{{properCase name}}/{{properCase name}}.test.tsx`,
                templateFile: './components/{{type}}.spec.tsx.hbs',
            },
        ]
        return actions
    },
}
