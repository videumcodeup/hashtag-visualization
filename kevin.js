// fs.readFileSync('sampledata.json').toString().split('\r\n').slice(0, -1).map(JSON.parse).filter((a) => a.coordinates)[0].coordinates

process.stdin.setEncoding('utf8')
let data = "";
process.stdin.on('readable', () => {
    var chunk = process.stdin.read()
    if (chunk !== null) {
        data += chunk.toString();
	// process.stdout.write(${chunk}\n)
    }
})
process.stdin.on('end', () => {
    process.stdout.write(.split('\r\n').slice(0, -1).map(JSON.parse).filter((a) => a.coordinates));
})
