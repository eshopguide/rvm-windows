#!/usr/bin/env node

const Wrapper = require('../cli/_wrapper');
const RvmCliTools = require('../cli/_tools');

const cwd = process.argv[2];

let version = Wrapper.getRubyVersionForPath(cwd);

let gem_home_var = "";
const matching_version = RvmCliTools.matchingVersion(version, RvmCliTools.versions());
if (matching_version) {
    const gem_home = RvmCliTools.getGemHomePath(matching_version);
    if (gem_home) {
        // ensure backslashes for windows, as in env vars, slashes are not allowed
        const gem_home_win = gem_home.replaceAll(/\//g, '\\');
        gem_home_var = `set "GEM_HOME=${gem_home_win}"`;
    } else {
        gem_home_var = `@echo off`;
    }
} else {
    gem_home_var = `@echo off`;
}

console.log(gem_home_var);
