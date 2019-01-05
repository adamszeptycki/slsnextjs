console.log('1')
const sls = require('serverless-http')
console.log('2')
const binaryMimeTypes = require('./binaryMimeTypes')
console.log('3')
const server = require('./server')
console.log('4')
module.exports.server = sls(server, {
  binary: binaryMimeTypes
})