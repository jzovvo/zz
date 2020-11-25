module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // angular
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        // my-cmz
        'merge', // merge branch
        'dev',   // development process
        'ver',   // update version number
        'conf'   // update config file
      ]
    ]
  }
}
