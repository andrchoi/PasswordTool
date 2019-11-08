sha1 = require('./sha1')

let input = process.argv.slice(2)
input = input.join(' ')

if (input === "") {
    console.log('Error: no input detected. \nUsage: pa_tool.js your_input_here')
} else {
    console.log('Your password is '+input)
    let hash = sha1(input)
    console.log(hash)
}