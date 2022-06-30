let leo={
    nome:'Leonardo',
    idade:20,
    corFavorita:'azul'
}

leo.aniversario='11/05/2002'

console.log(leo)

let cadastro=[{
    nome:'Leonardo',
    idade:20,
    telefone:992256789,
    amigos:['Adriana','Luan','Mariana','Cláudio']
},{
    nome:'Sophia',
    idade:16,
    telefone:985209876,
    amigos:['João','Fernando','Adriana','José']
},{
    nome:'Luan',
    idade:25,
    telefone:993095234,
    amigos:['Mariana','Cleiton','Marcos','Gabriel']
},{
    nome:'João',
    idade:17,
    telefone:992343526,
    amigos:['Cláudia','Ítalo','Mohammed','Val']
},{
    nome:'Pedro',
    idade:30,
    telefone:985674356,
    amigos:['Tiago','Paulo','Estevão','Davi']
}]

for(let cont=0;cont<=5;cont++){
    console.log(cadastro[cont].amigos[0])
}