Swal.fire(
    'Atención!',
    'Por favor selecciones todos los checklist que aparecen en el test, de lo contrario, el calculo del puntaje y el mensaje que se muestre será erroneo, por favor recuerde seleccionar segun su respuesta, muchas gracias y disfrute del Test',
    'info'
    )

function validar() {
    var muyMal1 = 0
    var muyMal2 = 30
    var bien1 = 31
    var bien2 = 32
    var bien3 = 33
    var bien4 = 34
    var bien5 = 35
    var bien6 = 36
    var bien7 = 37
    var bien8 = 38
    var bien9 = 39
    var bien10 = 40
    var bien11 = 41
    var bien12 = 42
    var bien13 = 43
    var bien14 = 44
    var bien15 = 45
    var bien16 = 46
    var bien17 = 47
    var bien18 = 48
    var bien19 = 49
    var bien20 = 50
    var bien21 = 51
    var bien22 = 52
    var bien23 = 53
    var bien24 = 54
    var bien25 = 55
    var bien26 = 56
    var bien27 = 57
    var bien28 = 58
    var bien29 = 59
    var bien30 = 60
    var muyBien1 = 61
    var muyBien2 = 100
    

    var mensaje = [
        'Tienes fallas de memoria relativamente frecuentes o significativas. Deberías consultar a un especialista. En cualquier caso no descuides tu memoria. Cualquier edad es buena para empezar a cuidar y proteger tu cerebro y tu memoria para prevenir su deterioro. Cuanto antes empieces mejor. Ejercita tu cerebro y tu memoria con NanoGym y protégelos diariamente con Omega 5 Nano',
        'Los resultados de tu test indican que experimentas algunas fallas frecuentes o significativas, que no deberías dejar pasar. Ante estas dificultades, es recomendable consultar a tu neurólogo, así como aprender a ejercitar tu memoria y conocer las claves para conservar tu cerebro sano a cualquier edad. Ejercítate con NanoGym.  Protege tu cerebro y tu memoria diariamente con Omega 5 Nano.',
        'Parece que tu memoria goza de buena salud. Aún así no la descuides. A cualquier edad puedes empezar a proteger y cuidar  tu cerebro y tu memoria, y de esta manera prevenir su deterioro. Cuanto antes empieces mejor. Ejercítate con NanoGym. Protege tu cerebro y tu memoria diariamente con Omega 5 Nano.'
    ]

    var respuesta = 0

    if (document.getElementById('bad').checked) {
        respuesta = respuesta + 5
        // respuesta = mensaje[1]
    }
    if (document.getElementById('bad2').checked) {
        respuesta = respuesta + 5
        // respuesta = mensaje[0]
    }
    if (document.getElementById('bad3').checked) {
        respuesta = respuesta + 5
        // respuesta = mensaje[0]
    }
    if (document.getElementById('bad4').checked) {
        respuesta = respuesta + 5
        // respuesta = mensaje[0]
    }
    if (document.getElementById('bad5').checked) {
        respuesta = respuesta + 5
        // respuesta = mensaje[0]
    }
    if (document.getElementById('bad6').checked) {
        respuesta = respuesta + 5
        // respuesta = mensaje[0]
    }
    if (document.getElementById('good7').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media7').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good8').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media8').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good9').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media9').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good10').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media10').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good11').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media11').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good12').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media12').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good13').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media13').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good14').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media14').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good15').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media15').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good16').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media16').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good17').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media17').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good18').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media18').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good19').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media19').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good20').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media20').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good21').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media21').checked) {
        respuesta = respuesta + 2
    }
    if (document.getElementById('good22').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
    } else if (document.getElementById('media22').checked) {
        respuesta = respuesta + 2
    }

    if (respuesta == muyMal1 || respuesta <= muyMal2) {
        // alert(mensaje[0])
        Swal.fire(
            'Mal!',
            mensaje[0],
            'error'
            )
    }
    if (respuesta == bien1 || respuesta == bien2  || respuesta == bien3  || respuesta == bien4  || respuesta == bien5  || respuesta == bien6  || respuesta == bien7  || respuesta == bien8  || respuesta == bien9  || respuesta == bien10  || respuesta == bien11  || respuesta == bien12  || respuesta == bien13  || respuesta == bien14  || respuesta == bien15  || respuesta == bien16  || respuesta == bien17  || respuesta == bien18  || respuesta == bien19  || respuesta == bien20  || respuesta == bien21  || respuesta == bien22  || respuesta == bien23  || respuesta == bien24  || respuesta == bien25  || respuesta == bien26  || respuesta == bien27  || respuesta == bien28  || respuesta == bien29  || respuesta == bien30) {
        // alert(mensaje[1])
        Swal.fire(
            'Alerta!',
            mensaje[1],
            'warning'
            )
    }
    if (respuesta >= muyBien1 || respuesta == muyBien2) {
        // alert(mensaje[2])
        Swal.fire(
            'Muy Bien!',
            mensaje[2],
            'success'
            )
    }

    // if (respuesta == muyMal) {
    //     alert(mensaje[0])
    // } else if (respuesta <= muyMal2) {
    //     alert(mensaje[0])
    // }
    // if (respuesta == bien) {
    //     alert(mensaje[1])
    // } else if (respuesta <= bien2) {
    //     alert(mensaje[1])
    // }
    // if (respuesta >= muyBien) {
    //     alert(mensaje[2])
    // } else if (respuesta == muyBien2) {
    //     alert(mensaje[2])
    // }

    
    // alert(respuesta)
}

(function() {

    var prueba1 = function() {
        var mensaje1 = [
            'Los olvidos significativos son las fallas de memoria más graves o preocupantes. De acuerdo a tus resultados, es necesario que solicites una evaluación neurológica de tu memoria, para descartar la presencia de cualquier patología. Protege tu cerebro diariamente con Omega 5 Nano.',
            'Los olvidos significativos son las fallas de memoria más graves o preocupantes. Tienes algunas fallas significativas. Independientemente de que tu puntuación en el test completo sea alta, sería recomendable solicitar una cita con un especialista, para una evaluación. De igual manera, es importante aprender más acerca de cómo cuidar y proteger tu cerebro y tu memoria, para prevenir estas fallas. Ejercita tu cerebro con Nanogym y protégelo diariamente con Omega 5 Nano.',
            'Los olvidos significativos son las fallas de memoria más graves o preocupantes. Tus fallas de memoria no son especialmente significativas. Aún así, si tu puntuación en el test es baja o si estás preocupado por tu memoria, sería recomendable consultar con un especialista. De igual manera, es importante aprender más acerca de cómo cuidar y proteger tu memoria y tu cerebro, para prevenir estas fallas. Ejercita tu cerebro y tu memoria con Nanogym, y protégelos diariamente con Omega 5 Nano.'
        ]

        var respuesta = 0

        if (document.getElementById('bad').checked) {
        respuesta = respuesta + 5
        // respuesta = mensaje[1]
        }
        if (document.getElementById('bad2').checked) {
            respuesta = respuesta + 5
            // respuesta = mensaje[0]
        }
        if (document.getElementById('bad3').checked) {
            respuesta = respuesta + 5
            // respuesta = mensaje[0]
        }
        if (document.getElementById('bad4').checked) {
            respuesta = respuesta + 5
            // respuesta = mensaje[0]
        }
        if (document.getElementById('bad5').checked) {
            respuesta = respuesta + 5
            // respuesta = mensaje[0]
        }
        if (document.getElementById('bad6').checked) {
            respuesta = respuesta + 5
            // respuesta = mensaje[0]
        }

        if (respuesta <= 10) {
            // alert(mensaje1[0])
            Swal.fire(
                'Mal!',
                mensaje1[0],
                'error'
                )
        }
        if (respuesta == 15 || respuesta == 20) {
            // alert(mensaje1[1])
            Swal.fire(
                'Alerta!',
                mensaje1[1],
                'warning'
                )
        }
        if (respuesta == 25 || respuesta == 30) {
            // alert(mensaje1[2])
            Swal.fire(
                'Muy Bien!',
                mensaje1[2],
                'success'
                )
        }
    }

    var boton1 = document.getElementById('btn1')
    btn1.addEventListener('click', prueba1)

    var prueba2 = function() {
        var mensaje2 = [
            'Muchas fallas de memoria vienen ocasionadas por falta de atención y problemas de concentración. Todo el mundo ha tenido alguna vez un problema como estos. En tu caso son bastante frecuentes. Esto puede indicar que tienes demasiadas cosas en la cabeza, estás preocupado o estresado. Si este es el  caso y tu puntuación en otras áreas del test es buena, será conveniente que aprendas a reducir tu estrés y a cuidar tu cerebro, para prevenir problemas de memoria en el futuro. Ejercita tu cerebro y tu memoria con NanoGym y protégelos diariamente con Omega 5 Nano.',
            'Muchas fallas de memoria vienen ocasionadas por falta de atención y problemas de concentración. Todo el mundo ha tenido alguna vez un problema como estos. En tu caso estos son relativamente frecuentes. Hay muchos trucos y ejercicios que puedes aprender para que estos problemas no te dificulten tus tareas cotidianas. Protege tu cerebro y tu memoria diariamente con Omega 5 Nano, y practica los ejercicios que encontrarás en NanoGym.',
            'Muchas fallas de memoria vienen ocasionadas por falta de atención y problemas de concentración. Todo el mundo ha tenido alguna vez un problema como estos. Parece que en tu caso tienes un buen nivel de atención y que tus fallas son menores. Para prevenir problemas de memoria en el futuro, es importante que desde hoy cuides y protejas tu cerebro. Ejercita tu cerebro con NanoGym y protégelo diariamente con Omega 5 Nano.'
        ]

        var respuesta = 0

        if (document.getElementById('good7').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
        } else if (document.getElementById('media7').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good8').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media8').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good9').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media9').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good10').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media10').checked) {
            respuesta = respuesta + 2
        }

        if (respuesta <= 5) {
            // alert(mensaje2[0])
            Swal.fire(
                'Mal!',
                mensaje2[0],
                'error'
                )
        }
        if (respuesta ==6 || respuesta == 7 || respuesta == 8) {
            // alert(mensaje2[1])
            Swal.fire(
                'Alerta!',
                mensaje2[1],
                'warning'
                )
        }
        if (respuesta == 9 || respuesta == 10 || respuesta == 11 || respuesta == 12) {
            // alert(mensaje2[2])
            Swal.fire(
                'Muy Bien!',
                mensaje2[2],
                'success'
                )
        }
    }

    var boton2 = document.getElementById('btn2')
    btn2.addEventListener('click', prueba2)

    var prueba3 = function() {
        var mensaje3 = [
            'La memoria de agenda nos permite recordar aquellas cosas que tenemos que hacer en un futuro y nos avisa cuándo es el momento de hacerlas. Tu memoria de agenda tiene fallas frecuentes. Si tu puntuación global en el test es buena este resultado puede indicar que tienes demasiadas cosas en la cabeza o muchas responsabilidades. Puedes aprender a utilizar trucos y ejercicios que te ayuden a recordar mejor lo que tienes que hacer. Ejercita tu memoria con Nanogym y protege tu cerebro diariamente con Omega 5 Nano.',
            'La memoria de agenda nos permite recordar aquellas cosas que tenemos que hacer en un futuro y nos avisa cuándo es el momento de hacerlas. Tu memoria de agenda tiene fallas con relativa frecuencia. Puedes aprender cómo utilizar trucos y ejercicios que te ayuden a recordar mejor lo que tienes que hacer. Ejercita tu cerebro con NanoGym y protégelo diariamente con Omega 5 Nano.',
            'La memoria de agenda nos permite recordar aquellas cosas que tenemos que hacer en un futuro y nos avisa cuándo es el momento de hacerlas. A todo el mundo se le ha olvidado una cita alguna vez. Parece que en tu caso tu agenda mental funciona bien. Aun así, puedes aprender cómo utilizar trucos y ejercicios que te ayuden a recordar mejor lo que tienes que hacer. Ejercita tu cerebro con NanoGym y protégelo diariamente con Omega 5 Nano.'
        ]

        respuesta = 0

        if (document.getElementById('good11').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
        } else if (document.getElementById('media11').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good12').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media12').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good13').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media13').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good14').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media14').checked) {
            respuesta = respuesta + 2
        }

        if (respuesta <= 5) {
            // alert(mensaje3[0])
            Swal.fire(
                'Mal!',
                mensaje3[0],
                'error'
                )
        }
        if (respuesta == 6 || respuesta == 7 || respuesta == 8 || respuesta == 9) {
            // alert(mensaje3[1])
            Swal.fire(
                'Alerta!',
                mensaje3[1],
                'warning'
                )
        }
        if (respuesta == 10 || respuesta == 11 || respuesta == 12) {
            // alert[mensaje3[2]]
            Swal.fire(
                'Muy Bien!',
                mensaje3[2],
                'success'
                )
        }
    }

    var boton3 = document.getElementById('btn3')
    btn3.addEventListener('click', prueba3)

    var prueba4 = function() {
        var mensaje4 = [
            'Encontrar palabras es difícil para muchas personas. Tu puntuación en esta sección es baja. Es recomendable que visites a un especialista, sobre todo si has notado que tu capacidad para encontrar palabras ha bajado en poco tiempo. Ejercita tu cerebro con NanoGym y protégelo diariamente con Omega 5 Nano.',
            'Tienes problemas para encontrar las palabras con relativa frecuencia. No conviene que descuides este  problema. Puedes aprender a ejercitar tu memoria y cuidar tu cerebro para evitar que el problema sea mayor. Ejercita u cerebro con NanoGym y protégelo diariamente con Omega 5 Nano.',
            'Encontrar palabras es difícil para muchas personas, aunque parece que no es tu caso. Sin embargo, es conveniente que aprendas a ejercitar tu memoria y a prevenir estos problemas. Ejercita tu memoria con NanoGym y protege tu cerebro diariamente con Omega 5 Nano.'
        ]

        var respuesta = 0

        if (document.getElementById('good15').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
        } else if (document.getElementById('media15').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good16').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media16').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good17').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media17').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good18').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media18').checked) {
            respuesta = respuesta + 2
        }

        if (respuesta <=6) {
            // alert(mensaje4[0])
            Swal.fire(
                'Mal!',
                mensaje4[0],
                'error'
                )
        }
        if (respuesta == 7 || respuesta == 8 || respuesta == 9 || respuesta == 10 || respuesta == 11) {
            // alert(mensaje4[1])
            Swal.fire(
                'Alerta!',
                mensaje4[1],
                'warning'
                )
        }
        if (respuesta == 12) {
            // alert(mensaje4[2])
            Swal.fire(
                'Muy Bien!',
                mensaje4[2],
                'success'
                )
        }
    }

    var boton4 = document.getElementById('btn4')
    btn4.addEventListener('click', prueba4)

    var prueba5 = function() {
        var mensaje5 = [
            'Olvidar lo que hemos hecho el día anterior o detalles de nuestro día a día son fallas  de memoria poco frecuentes. Tu puntuación en esta sección es baja. Es conveniente que consultes a un especialista y comiences a utilizar trucos y ejercicios que eviten que estos problemas se incrementen. Ejercita tu memoria con NanoGym, y protege tu cerebro diariamente con Omega 5 Nano.',
            'Olvidar lo que hemos hecho el día anterior o detalles de nuestro día a día son fallas de memoria poco frecuentes. En tu caso, te cuesta recordar tu día a día un poco más de lo normal. Puedes aprender a ejercitar tu memoria y cuidar tu cerebro para evitar que estos problemas se incrementen. Ejercita tu memoria con NanoGym, y protege tu cerebro diariamente con Omega 5 Nano.',
            'Olvidar lo que hemos hecho el día anterior o detalles de nuestro día a día son fallas de memoria poco frecuentes. Experimentas pequeñas fallas de este tipo. Para evitarlas hay muchos ejercicios y prácticas sencillas que te ayudarán a fortalecer tu memoria y prevenir que se incrementen. Ejercita tu memoria con NanoGym, y protege tu cerebro diariamente con Omega 5 Nano.'
        ]

        var respuesta = 0

        if (document.getElementById('good19').checked) {
        respuesta = respuesta + 3
        // respuesta = mensaje[0]
        } else if (document.getElementById('media19').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good20').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media20').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good21').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media21').checked) {
            respuesta = respuesta + 2
        }
        if (document.getElementById('good22').checked) {
            respuesta = respuesta + 3
            // respuesta = mensaje[0]
        } else if (document.getElementById('media22').checked) {
            respuesta = respuesta + 2
        }

        if (respuesta <= 4) {
            // alert(mensaje5[0])
            Swal.fire(
                'Mal!',
                mensaje5[0],
                'error'
                )
        }
        if (respuesta == 5 || respuesta == 6 || respuesta == 7 || respuesta == 8) {
            // alert(mensaje5[1])
            Swal.fire(
                'Alerta!',
                mensaje5[1],
                'warning'
                )
        }
        if (respuesta == 9 || respuesta == 10 || respuesta == 11 || respuesta == 12) {
            // alert(mensaje5[2])
            Swal.fire(
                'Muy Bien!',
                mensaje5[2],
                'success'
                )
        }
    }

    var boton5 = document.getElementById('btn5')
    btn5.addEventListener('click', prueba5)

}())