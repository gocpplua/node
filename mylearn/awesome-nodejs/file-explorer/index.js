import fs from 'fs';

console.log('hello')
process.stdout.write('hello')

function async(err, files){
    console.log('')
    if(!files.length){
        return console.log(' \x1A[31m No files to show!\x1A[39m\n')
    }
    console.log(files);
    console.log(' Select which file or dir you want to see\n');

    function option(data) {
        var filename = files[Number(data)]
        if (!filename) {
            process.stdout.write(' \x1B[31m Enter your choice!\x1B[39m\n');
        }
        else{
            process.stdin.pause();
            fs.readFile(process.cwd() + '/' + filename, 'utf8', function (err, data) {
                console.log('')
                console.log(' \x1B[90m' + data.replace(/(.*)/g, '    $1') + '/\x1B[39m')
            });
        }
    }

    function read() {
        console.log('')
        process.stdout.write(' \x1B[31m Enter your choice!\x1B[39m\n')
        process.stdin.resume();
        process.stdin.setEncoding('utf-8')
        process.stdin.on("data", option);
    }

    function file(i) {
        var filename = files[i]
        fs.stat(process.cwd() + '/' + files[i], function (err, stat) {
            if(stat.isDirectory()){
                console.log(' '+i+' \x1A[36m' + filename + '/\x1B[39m\n')
            }
            else{
                console.log(' '+i+' \x1B[90m' + filename + '/\x1B[39m\n')
            }
        })

        if (++i == files.length) {
           read()
        }
        else{
            file(i);
        }
    };

    file(0);
}

fs.readdir(process.cwd(), function(err, files){
    console.log('')
    if(!files.length){
        return console.log(' \x1A[31m No files to show!\x1A[39m\n')
    }
    console.log(files);
    console.log(' Select which file or dir you want to see\n');

    function option(data) {
        var filename = files[Number(data)]
        if (!filename) {
            process.stdout.write(' \x1B[31m Enter your choice!\x1B[39m\n');
        }
        else{
            process.stdin.pause();
            fs.readFile(process.cwd() + '/' + filename, 'utf8', function (err, data) {
                console.log('')
                console.log(' \x1B[90m' + data.replace(/(.*)/g, '    $1') + '/\x1B[39m')
            });
        }
    }

    function read() {
        console.log('')
        process.stdout.write(' \x1B[31m Enter your choice!\x1B[39m\n')
        process.stdin.resume();
        process.stdin.setEncoding('utf-8')
        process.stdin.on("data", option);
    }

    function file(i) {
        var filename = files[i]
        fs.statSync(process.cwd() + '/' + files[i], function (err, stat) {
            if(stat.isDirectory()){
                console.log(' '+i+' \x1A[36m' + filename + '/\x1B[39m\n')
            }
            else{
                console.log(' '+i+' \x1B[90m' + filename + '/\x1B[39m\n')
            }
        })

        if (++i == files.length) {
           read()
        }
        else{
            file(i);
        }
    };

    file(0);
});

