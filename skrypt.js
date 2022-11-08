function bmi(){
    document.getElementById("blad").innerHTML="";
    document.getElementById("obraz").src="obrazki/0.png";
    document.getElementById("diagnoza").innerHTML="";
    document.getElementById("wynik").innerHTML="";

    if(document.getElementById("w").value=="" || document.getElementById("m").value==""){
        document.getElementById("blad").innerHTML="Podaj obie wartości!!";
        return;
    }

    var wzrost=parseFloat(document.getElementById("w").value)/100;
    var masa=parseFloat(document.getElementById("m").value);
    var p=document.getElementById("form").plec.value;

    if(p==""){
        document.getElementById("blad").innerHTML="Proszę wybierz płeć!";
        return;
    }

    var BMI=masa/(wzrost**2);
    BMI=Math.round(BMI*100)/100;

    document.getElementById("wynik").innerHTML="BMI: <span>"+BMI+"</span>";

    if(p=="m"){
        if(BMI<16){
            document.getElementById("obraz").src="obrazki/3.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>wygłodzenie</span>";
        }
    
        if(BMI>=16 && BMI<17){
            document.getElementById("obraz").src="obrazki/6.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>wychudzenie</span>";
        }
    
        if(BMI>=17 && BMI<=18.49){
            document.getElementById("obraz").src="obrazki/1.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>niedowaga</span>";
        }
    
        if(BMI>=18.5 && BMI<25){
            document.getElementById("obraz").src="obrazki/5.png";
            document.getElementById("diagnoza").innerHTML="Wynik: waga <span>prawidłowa</span>";
        }
    
        if(BMI>=25 && BMI<30){
            document.getElementById("obraz").src="obrazki/IMG_20221108_094046.jpg";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>nadwaga</span>";
        }
    
        if(BMI>=30 && BMI<35){
            document.getElementById("obraz").src="obrazki/2.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>otyłość I stopnia</span>";
        }
    
        if(BMI>=35 && BMI<40){
            document.getElementById("obraz").src="obrazki/7.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>otyłość II stopnia</span>";
        }
    
        if(BMI>=40){
            document.getElementById("obraz").src="obrazki/4.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>otyłość skrajna</span>";
        }
    }

    if(p=="f"){
        if(BMI<13.6){
            document.getElementById("obraz").src="obrazki/3.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>wygłodzenie</span>";
        }
    
        if(BMI>=13.6 && BMI<14.45){
            document.getElementById("obraz").src="obrazki/6.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>wychudzenie</span>";
        }
    
        if(BMI>=14.45 && BMI<=15.72){
            document.getElementById("obraz").src="obrazki/1.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>niedowaga</span>";
        }
    
        if(BMI>=15.72 && BMI<21.25){
            document.getElementById("obraz").src="obrazki/5.png";
            document.getElementById("diagnoza").innerHTML="Wynik: waga <span>prawidłowa</span>";
        }
    
        if(BMI>=21.25 && BMI<25.5){
            document.getElementById("obraz").src="obrazki/IMG_20221108_094046.jpg";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>nadwaga</span>";
        }
    
        if(BMI>=25.5 && BMI<29.75){
            document.getElementById("obraz").src="obrazki/2.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>otyłość I stopnia</span>";
        }
    
        if(BMI>=29.75 && BMI<34){
            document.getElementById("obraz").src="obrazki/7.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>otyłość II stopnia</span>";
        }
    
        if(BMI>=34){
            document.getElementById("obraz").src="obrazki/4.png";
            document.getElementById("diagnoza").innerHTML="Wynik: <span>otyłość skrajna</span>";
        }
    }
}