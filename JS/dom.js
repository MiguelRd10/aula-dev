(function(doc){
    
    let imagens = doc.querySelectorAll('.imagem');
   
    imagens.forEach(elemento => {
        elemento.addEventListener('mouseover', event =>{
           event.target.src = "http://127.0.0.1:5500/img/service2.png"
           elemento.classList.add('borda-10')
    
        })
    
        elemento.addEventListener('mouseout', event =>{
        event.target.src = "http://127.0.0.1:5500/img/service1.png"
        elemento.classList.remove('borda-10')
        })


    })
   
    

    // const lista = ['Paulo', 'Celso', 'Ana'];
    // lista.forEach


})(document)