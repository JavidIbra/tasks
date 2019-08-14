let a = parseInt(prompt('a-ni daxil edin:'));
let b = parseInt(prompt('b-ni daxil edin:'));
let c = parseInt(prompt('c-ni daxil edin:'));



if (a != 0 && b != 0 && c != 0 && a+b>c && a+c>b && b+c>a && a!=b && a!=c && b!=c ) {
    
    document.write('dogrudur');
}
   else if (c == a && a == b && a != 0 && b != 0 && c != 0) {
        alert('ucbucaq berabertereflidir');
    }
    else if (c==a!=b && a==b!=c && c==b!=a && a != 0 && b != 0 && c != 0){
        alert('ucbucaq beraberyanlidir')
    }
  
else{
    alert(' mumkun deyil');
}