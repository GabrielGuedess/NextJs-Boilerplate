const plopConfig = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message:
          'What is the type of your component (atoms, molecules or organisms)?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{type}}/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{type}}/{{pascalCase name}}/types.ts',
        templateFile: 'templates/types.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{type}}/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  });
};

export default plopConfig;
