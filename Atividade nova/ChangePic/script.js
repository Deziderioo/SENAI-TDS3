function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light");

    var imagem = document.querySelector("#profile");
    var btn = document.getElementById("btnStyle");
    var dt = document.getElementById("data");
    var registro = new Date();
    dt = registro;
    dt = formatarData(registro);
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"

    }

    return item.toLocateString("pt-BR", options)

}