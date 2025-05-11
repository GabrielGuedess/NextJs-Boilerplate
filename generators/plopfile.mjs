const config = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What is your module name?',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: data => {
      const choice =
        data.type === 'templates' ? 'templates' : 'components/{{type}}';

      return [
        {
          type: 'add',
          path: `../src/${choice}/{{pascalCase name}}/index.tsx`,
          templateFile: 'templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `../src/${choice}/{{pascalCase name}}/stories.tsx`,
          templateFile: 'templates/stories.tsx.hbs',
        },
        {
          type: 'add',
          path: `../src/${choice}/{{pascalCase name}}/types.ts`,
          templateFile: 'templates/types.ts.hbs',
        },
        {
          type: 'add',
          path: `../src/${choice}/{{pascalCase name}}/test.tsx`,
          templateFile: 'templates/test.tsx.hbs',
        },
      ];
    },
  });
};

export default config;
