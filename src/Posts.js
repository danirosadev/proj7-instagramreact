import React from "react"

function Post(props, { curtir }) {
    const [salvo, setSalvo] = React.useState("bookmark-outline")
    const [like, setLike] = React.useState("heart-outline")
    const [cor, setCor] = React.useState("black")
    const [numLikes, setNumLikes] = React.useState(1)

    function salvar() {
        if (salvo === "bookmark-outline") {
            setSalvo("bookmark")
        }

        if (salvo === "bookmark") {
            setSalvo("bookmark-outline")
        }
    }

    function curtir() {
        if (like === "heart-outline") {
            setLike("heart")
            setCor("danger")
            setNumLikes(numLikes + 1)
        }

        if (like === "heart") {
            setLike("heart-outline")
            setCor("black")
            setNumLikes(numLikes - 1)
        }
    }

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onClick={curtir} src={props.conteudoImg} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={curtir} name={like} color={cor}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvar} name={salvo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras <span data-test="likes-number">{numLikes}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    let listaPosts = [
        { userImg: "assets/img/meowed.svg", userName: "meowed", conteudoImg: "assets/img/gato-telefone.svg" },
        { userImg: "assets/img/barked.svg", userName: "barked", conteudoImg: "assets/img/dog.svg" }
    ]

    return (
        <div class="posts">
            {listaPosts.map((p) => <Post userImg={p.userImg} userName={p.userName} conteudoImg={p.conteudoImg} />)}
        </div>
    )
}