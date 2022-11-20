import React from 'react'

function UsuarioLogado(props) {


    return (
        <>
            {props.img}
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {props.nome}
                    {props.icon}
                </span>
            </div>
        </>
    )
}

export default function Usuario() {
    const [nome, setNome] = React.useState("Catana")
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")

    function alteraNome() {
        let novoNome = prompt("Qual o seu nome?")
        setNome(novoNome)
    }

    function alteraFoto() {
        let novaFoto = prompt("Insira o link de sua nova foto:")
        setFoto(novaFoto)
    }

    return (
        <div data-test="user" class="usuario">
            <UsuarioLogado 
            img={<img data-test="profile-image" onClick={alteraFoto} src={foto} />} 
            user="catanacomics" nome={nome} 
            icon={<ion-icon data-test="edit-name" onClick={alteraNome} name="pencil"></ion-icon>} />
        </div>
    )
}