function entrarNotas(){
    let i = 0
    let somaNotas = 0
    nota = Number(prompt('Digite sua nota [999- quando acabar as notas] ->'))
    while(true){
        if (nota != 999){
            i += 1
            somaNotas += nota
            nota = Number(prompt('Digite sua nota [999- quando acabar as notas] ->'))
        }else{
            break
        }  
    }
    let situação = ''
    let media = somaNotas/i
    if (media < 3){
        situação = 'REPROVADO !'
        document.write(`A MÉDIA DO ALUNO É ${media}, LOGO ELE ESTÁ <mark>${situação}</mark>`)
    }else if(media >= 3 && media <=6){
        situação = 'RECUPERAÇÃO !'
        document.write(`A MÉDIA DO ALUNO É ${media}, LOGO ELE ESTÁ <mark>${situação}</mark>`)
    }else{
        situação = 'APROVADO !'
        document.write(`A MÉDIA DO ALUNO É ${media}, LOGO ELE ESTÁ <mark>${situação}</mark>`)
    }
 }
