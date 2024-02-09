function teste(nome){
    switch(nome){
        case 'Henrique':
            return 'Henrique presente';  // com o return não há necessidade de break
        case 'Joao':
            console.log('João presente');
            break;
        case 'Ana':
        case 'Jose':
            console.log('José presente');
            break;
        default:
            console.log('Não está presente');
            break;
    }
}

teste('Maria');