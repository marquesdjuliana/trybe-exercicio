let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':

    console.log('Consulte a classificação do filme');
    break;
    
  case 'adulto':

    console.log('A pessoa adulta é classificada para assistir qualquer filme')
    break;

    case 'idoso':
      console.log('A pessoa idosa é classificada para assistir qualquer filme');
      break
  default:
    console.log('só pode assistir filmes livres');
}