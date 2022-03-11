function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 3){
                //Bebe
                img.setAttribute('src','menino-bebe.jpg')
            }else if(idade > 3 && idade <= 12){
                //Crianca
                img.setAttribute('src','garoto-crianca.jpg')
            }else if(idade > 12 && idade <= 21){
                //Adolescente
                img.setAttribute('src','garoto-adolescente.png')
            }else if(idade > 21 && idade <= 50){
                //Adulto
                img.setAttribute('src','homem-adulto.jpg')
            }else{
                //Idoso
                img.setAttribute('src','homem-idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 3){
                //Bebe
                img.setAttribute('src','menina-bebe.jpg')
            }else if(idade > 3 && idade <= 12){
                //Crianca
                img.setAttribute('src','garota-crianca.png')
            }else if(idade > 12 && idade <= 21){
                //Adolescente
                img.setAttribute('src','garota-adolescente.png')
            }else if(idade > 21 && idade <= 50){
                //Adulto
                img.setAttribute('src','mulher-adulta.jpg')
            }else{
                //Idoso
                img.setAttribute('src','mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos:`
        res.appendChild(img)
    }
}

