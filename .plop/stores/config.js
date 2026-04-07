const componentsPath = '../src/'

module.exports = function (plop) {
    return {
        description: 'Generate a new React store',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Store name:',
                validate: (value) => {
                    if (!value) {
                        return 'Store name is required'
                    }
                    return true
                },
            },
        ],
        actions: (data) => {
            let fileName = `create{{ properCase name }}Slice`
            let interfaceName = `I{{properCase name}}Slice`

            fileName = plop.renderString(fileName, data)
            interfaceName = plop.renderString(interfaceName, data)

            let actions = [
                // Store
                {
                    type: 'add',
                    path: `${componentsPath}/stores/slices/${fileName}.ts`,
                    templateFile: './stores/createSlice.ts.hbs',
                },
                // Modify Type
                {
                    type: 'modify',
                    pattern:
                        /(\/\/ COMPONENT IMPORTS -- DO NOT REMOVE COMMENT!)/gi,
                    path: `${componentsPath}/stores/index.ts`,
                    template: `import { ${interfaceName}, ${fileName} } from './slices/${fileName}'\n$1`,
                },
                // Modify Stores
                {
                    type: 'modify',
                    pattern: /(\/\/ STORE -- DO NOT REMOVE COMMENT!)/gi,
                    path: `${componentsPath}/stores/index.ts`,
                    template: `...${fileName}(...v), \n$1`,
                },
                // Modify Type
                {
                    type: 'modify',
                    pattern: /(\/\/ TYPE -- DO NOT REMOVE COMMENT!)/gi,
                    path: `${componentsPath}/stores/index.ts`,
                    template: `& ${interfaceName} \n$1`,
                },
            ]
            return actions
        },
    }
}
