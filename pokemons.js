$(function () {
    const pokemons = [];
    const myAszinkron = new MyAszinkron();

    function megjelenit(tomb) {
        $("article h2").text(tomb.name);
        $(".pokemon img").attr("src", tomb.sprites.front_default);
        $(".pokemon img").attr("alt", tomb.name);
        console.log(tomb.sprites.front_default);
    }
    function hiba() {
        $(".pokemon img").attr(
            "src",
            "https://c.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif"
        );
        $(".pokemon img").attr("alt", "hiba");
    }
    $("button").on("click", () => {
        let id = Math.floor(Math.random() * 1000);
        console.log(id);
        const apiuri = "https://pokeapi.co/api/v2/pokemon/" + id;
        myAszinkron.getAdatok(apiuri, pokemons, megjelenit, hiba);
    });
});
