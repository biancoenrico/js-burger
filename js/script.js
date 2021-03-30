// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

var costoBase = 50

var calculate = document.getElementById('button')
calculate.addEventListener('click', function(){

    var nomePanino = document.getElementById('mio-nome').value
    var ingredient = document.getElementsByClassName('addon')
    console.log(ingredient);

    if(nomePanino == ''){
        alert('dai un nome al tuo panino')
    }

    for (var i = 0; i < ingredient.length; i++) {
        if (ingredient[i].checked) {
            costoBase = costoBase + parseInt(ingredient[i].value);
        }
    }

    var coupon = document.getElementById('coupon').value;
    if(coupon == 'sconto123' || coupon == 'tantafantasia' || coupon == 'fammimangiare' || coupon == 'sotirchio'){
       costoBase = costoBase - costoBase * 0.20;
    }

    document.getElementById('tot').innerHTML ='$' + costoBase;

    if(nomePanino == ''){
        document.getElementById("button").disabled = false; 
    }else{
        document.getElementById("button").disabled = true; 
    }
})

