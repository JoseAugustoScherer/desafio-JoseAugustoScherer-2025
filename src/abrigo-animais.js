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
    
  }
}

export { AbrigoAnimais as AbrigoAnimais };
