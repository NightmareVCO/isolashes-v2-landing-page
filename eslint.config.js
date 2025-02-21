import eslintPluginAstro from "eslint-plugin-astro";
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "tsconfig.json",
      tsconfigRootDir: ".",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "simple-import-sort"],
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "plugin:unicorn/recommended",
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: [".eslintrc.js", "next.config.js", "next-env.d.ts"],
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
            kebabCase: true,
          },
        },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
    overrides: [
      {
        files: ["*.ts"],
        rules: {
          "simple-import-sort/imports": [
            "error",
            {
              groups: [
                [
                  "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
                ],
                [
                  "^node:.*\\u0000$",
                  "^@?\\w.*\\u0000$",
                  "^[^.].*\\u0000$",
                  "^\\..*\\u0000$",
                ],
                ["^\\u0000"],
                ["^node:"],
                ["^@?\\w"],
                ["^@src(/.*|$)"],
                ["^@shared(/.*|$)"],
                ["^@tests(/.*|$)"],
                ["^"],
                ["^\\."],
              ],
            },
          ],
        },
      },
    ],
  },
];
