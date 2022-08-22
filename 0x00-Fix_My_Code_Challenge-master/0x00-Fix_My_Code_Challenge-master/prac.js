if(process.argv.length <= 2){
    process.stderr.write("Not available");
    process.stderr.write("Use ./ljweih 2");
    process.stderr.write("Not available");
    process.exit(1);
}

size = parseInt(process.argv[2],10)

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}