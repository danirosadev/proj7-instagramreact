function Story(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.foto} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}

export default function Stories(){

    let listaStories = [
        {foto:"assets/img/9gag.svg", nome:"9gag"},
        {foto:"assets/img/meowed.svg", nome:"meowed"},
        {foto:"assets/img/barked.svg", nome:"barked"},
        {foto:"assets/img/nathanwpylestrangeplanet.svg", nome:"nathanwpylestrangeplanet"},
        {foto:"assets/img/wawawicomics.svg", nome:"wawawicomics"},
        {foto:"assets/img/respondeai.svg", nome:"respondeai"},
        {foto:"assets/img/filomoderna.svg", nome:"filomoderna"},
        {foto:"assets/img/memeriagourmet.svg", nome:"memeriagourmet"}
    ]

    return(
        <>
            <div class="stories">
                {listaStories.map((s) => <Story foto={s.foto} nome={s.nome}/> )}
                
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </>
    )
}