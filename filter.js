process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
    var chunk = process.stdin.read()
    if (chunk !== null) {
            process.stdout.write(`${chunk}\n`)
            throw new Error()
            const tweet = JSON.parse(chunk)
            process.stdout.write(`${tweet.coordinates}\n`)
            if (tweet.coordinates) {
                process.stdout.write("${tweet.coordinates}\n")
            }
    }
})
process.stdin.on('end', () => {
    // process.stdout.write('end\n')
})
