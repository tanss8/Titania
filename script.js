function insert(num){
    document.form.textView.value =  document.form.textView.value+num;
}

function c(){
    document.form.textView.value = "";
}

function del(){
    var x =  document.form.textView.value;
    document.form.textView.value = x.substring(0, x.length-1)
}

function equal(){
    var x = document.form.textView.value;
    if(x == ""){
        alert('masukan angka terlebih dahulu');
    }

    if(x){

        document.form.textView.value = eval(x);
    }
    document.form.textView.value = eval(x); 
}