let admin = {

    kullaniciAdi: 'browser',
    sifre : 1234
}



function login (){

    kullaniciAdigir = prompt('Kullanici adinizi giriniz')
    sifreniz = prompt('Sifrenizi giriniz')

    while(true){

        
    if(kullaniciAdigir==admin.kullaniciAdi && sifreniz==admin.sifre){

        alert('Giriş başarılı')
        document.write('Hosgeldiniz. ')
        break;
    }

    else{
        alert('Giriş yanlış tekrar deneyiniz.')
        break;
    }
    }
}


