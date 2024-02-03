function kmes(){
    let a=parseFloat(document.getElementById("kms").value);
    let b= parseFloat(a * 0.621371);

    document.getElementById("mi").innerHTML=`${a} kilometers is approximetly ${b} miled`;


};