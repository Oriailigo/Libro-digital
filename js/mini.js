    const buttonPrev = document.getElementById('button-prev');
    const buttonNext = document.getElementById('button-next');
    const track = document.getElementById('track');
    const slickList = document.getElementById('slick-list');
    const slick = document.querySelectorAll('.slick');
    const tarjeta = document.getElementById('car');
    const slickWidth = slick[0].offsetWidth;//ancho de la tarjeta

    function stilo()
    {
      const l1= document.getElementById("d");

    //   l1.className = 'slick a img .slick-arrow .card .card .imgBox  .card .bark';
    //   l1.className = 'negativo love';
        
    
      console.log("ajaa");
    }
    buttonPrev.onclick = () => Move(1);
    buttonNext.onclick = () => Move(2);

    function Move(value) {
        const trackWidth = track.offsetWidth;//ancho del contenedor de tarjetas
        const listWidth = slickList.offsetWidth;//ancho del carrousel

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2)* -1)

        if(leftPosition < ( trackWidth - listWidth ) && value == 2){
            track.style.left = `${-1 * (leftPosition + slickWidth)}px`;//desplazamiento hacia la izquierda (distancia leftposition + tamaño tarjeta)
        } else if (leftPosition > 0 && value == 1){
            track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
        }

    }
