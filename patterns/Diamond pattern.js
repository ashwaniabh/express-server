let num=4
function toprintdiamond(n){
for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
        process.stdout.write(' ')
    }
    for(let j=0;j<=i;j++){
        process.stdout.write('* ')
    }
    console.log();
}
for(let i=0;i<n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(' ')
    }
    for(let j=0;j<n-i;j++){
        process.stdout.write('* ')
    }
    console.log();
}
}
//<input type="number" id="num1"/>
//var num=document.getElementById("num1");
toprintdiamond(num)
