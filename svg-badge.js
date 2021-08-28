#!/usr/bin/env node


const {
    makeBadge,
    ValidationError
} = require('badge-maker')

const format = {
    label: 'build',
    message: 'passed',
    color: 'green',
}

const svg = makeBadge(format)
console.log(svg) // <svg...

try {
    makeBadge({})
} catch (e) {
    console.log(e) // ValidationError: Field `message` is required
}