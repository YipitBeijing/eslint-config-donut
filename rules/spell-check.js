const fs = require('fs');
const path = require('path');

const spellcheckWhitelist = fs
  .readFileSync(path.join(__dirname, './spell-check-whitelist.dict'))
  .toString()
  .split('\n')
  .map((word) => word.trim())
  .filter((word) => word); // Remove any empty lines

module.exports = {
  rules: {
    'spellcheck/spell-checker': [
      'warn',
      {
        comments: false,
        strings: true,
        identifiers: false,
        lang: 'en_US',
        skipWords: spellcheckWhitelist,
        skipIfMatch: [
          'http://[^s]*',
          'file://[^s]*',
          'cid:[^s]*',
          'uber://[^s]*',
          '\\w-\\w',
          '^[-\\w]+/[-\\w\\.]+$', // For MIME Types
        ],
        skipWordIfMatch: [],
        minLength: 3,
      },
    ],
  },
};
