import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			'prettier',
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			'react/jsx-no-target-blank': 'off',
			'react/react-in-jsx-scope': 'off',
			'no-unused-vars': 'error',
			'no-unused-expressions': 'error',
			'prefer-const': 'error',
			'no-console': 'warn',
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
			'@typescript-eslint/no-explicit-any': 1,
			'@typescript-eslint/no-var-requires': 1,
		},
	}
);
