class AbrigoAnimais {

  encontraPessoas( brinquedosPessoa1, brinquedosPessoa2, ordemAnimais ) {
    const animais = {
      'Rex' : [ 'RATO',  'BOLA' ], 
      'Mimi': [ 'BOLA',  'LASER' ],
      'Fofo': [ 'BOLA',  'RATO', 'LASER' ], 
      'Zero': [ 'RATO',  'BOLA' ],
      'Bola': [ 'CAIXA', 'NOVELO' ], 
      'Bebe': [ 'LASER', 'RATO', 'BOLA' ],
      'Loco': [ 'SKATE', 'RATO' ]
    };

    const p1    = brinquedosPessoa1.split( ',' );
    const p2    = brinquedosPessoa2.split( ',' );
    const ordem = ordemAnimais.split( ',' );

    for ( let animal of ordem ) {
      if ( !animais[ animal ] ) return { erro: 'Animal inválido' };
    }
    
    const resultado = [];
    let count1 = 0, count2 = 0;
    
    for ( let animal of ordem ) {
      const brinquedos = animais[ animal ];
      const pode1 = count1 < 3 && temNaOrdem( p1, brinquedos );
      const pode2 = count2 < 3 && temNaOrdem( p2, brinquedos );

      if ( pode1 && pode2 ) {
        resultado.push( `${animal} - abrigo` );
      } else if ( pode1 ) {
        resultado.push( `${animal} - pessoa 1` );
        count1++;
      } else if ( pode2 ) {
        resultado.push( `${animal} - pessoa 2` );
        count2++;
      } else {
        resultado.push( `${animal} - abrigo` );
      }
    }
    
    return { lista: resultado.sort() };

    function temNaOrdem( lista, necessarios ) {
      let pos = 0;
      for ( let item of necessarios ) {
        pos = lista.indexOf( item, pos );
        if ( pos === -1 ) return false;
        pos++;
      }
      return true;
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais };
