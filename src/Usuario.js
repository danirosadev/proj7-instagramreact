import React from 'react'

function UsuarioLogado(props) {


    return (
        <>
            {props.img}
            <div class="texto">
                {props.user}
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

        if (novoNome === ""){
            alert("Por favor, insira seu nome")
        } else {
            setNome(novoNome)
        }
        
    }

    function alteraFoto() {
        let novaFoto = prompt("Insira o link de sua nova foto:")

        if (novaFoto === ""){
            alert("Por favor, insira um link válido")
        } else {
            setFoto(novaFoto)
        }
       
    }

    return (
        <div data-test="user" class="usuario">
            <UsuarioLogado 
            img={<img data-test="profile-image" onClick={alteraFoto} src={foto} />} 
            user={<strong>Catana</strong>}
            nome={<span data-test="name">{nome}</span>}
            icon={<ion-icon data-test="edit-name" onClick={alteraNome} name="pencil"></ion-icon>} />
        </div>
    )
}