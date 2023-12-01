const salas = [
    {
      turma: "A",
      alunos: [
        {
          nota: 10,
        },
        {
          nota: 7,
        },
        {
          nota: 1,
        },
      ],
    },
    {
      turma: "B",
      alunos: [
        {
          nota: 8,
        },
        {
          nota: 10,
        },
        {
          nota: 7.5,
        },
        {
          nota: 10,
        },
        {
          nota: 2,
        },
        {
          nota: 3,
        },
      ],
    },
    {
      turma: "C",
      alunos: [
        {
          nota: 4,
        },
        {
          nota: 6,
        },
        {
          nota: 7.5,
        },
        {
          nota: 10,
        },
        {
          nota: 5,
        },
      ],
    },
  ];

  // Retorne um objeto em que a chave é o nome da turma e o valor é a média da turma:

  function getMediaTurmas() {
    const objetoDeSalas = salas.reduce((acc, item) => {
        const somaNotas = item.alunos.reduce((acc, item) => {
            return acc + item.nota
            console.log(somaNotas)
        },0)
        const media = somaNotas / item.alunos.length
        return {...acc, [item.turma]: media}
    },{})

    return objetoDeSalas
    
  }
  
  getMediaTurmas()


  // Retorne a lista de salas ordenadas pela média, de maneira decrescente:

  function main() {
    const mediaTurmas = getMediaTurmas()
    const turmasOrdenadas = salas.sort((a, b) => {
        const mediaA = mediaTurmas[a.turma]
        const mediaB = mediaTurmas[b.turma]

        if (mediaA > mediaB) {
            return -1
        }
        return 1
    })
    console.log(turmasOrdenadas)
    
  }
  main()