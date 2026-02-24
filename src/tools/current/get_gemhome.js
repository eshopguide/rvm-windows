#!/usr/bin/env node

const RvmCliTools = require('../../cli/_tools');

const version = RvmCliTools.getCurrentVersion();
const gem_home = RvmCliTools.getGemHomePath(version);

if (gem_home) {
    console.log(gem_home.replaceAll(/\//g, '\\'));
} else {
    console.log('');
}
