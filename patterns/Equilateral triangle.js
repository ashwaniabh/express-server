var num=10;

function printTraingle (n){for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        process.stdout.write(" ");
    }
    for(let j=0;j<i+1;j++){
        process.stdout.write("* ");
    }
    console.log();
}
}
printTraingle(num);