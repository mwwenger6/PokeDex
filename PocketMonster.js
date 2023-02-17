let allPokemons = []

window.onload = async () => {
    window.setTimeout(doIt, 500);
    $('#modal').modal({ show: false})
}
    
doIt = () => {
    const url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            let num = "";
            let pokeName = "";
            let type = []
            let img = ''
            let height = "";
            let weight = "";
            let weaknesses = []
            let candy = "";
            data = JSON.parse(data)
            $.each(data.pokemon, function (key, value) {
                num = value.num;
                pokeName = value.name;
                if(pokeName.includes('Male')){
                    pokeName = pokeName.replace('Male', '')
                } else if(pokeName.includes('Female')){
                    pokeName = pokeName.replace('Female', '')
                }
                type = value.type
                img = value.img
                height = value.height
                weight = value.weight
                weaknesses = value.weaknesses
                candy = value.candy
                let pokemon = new Pokemon(num, pokeName, type, img, height, weight, weaknesses, candy)
                allPokemons.push(pokemon)
            });
            let count = 0;
            for(let i =0; i<25; i++){ 
                let div1 = document.createElement("div");
                div1.className = 'rowCards'
                div1.className = 'center'
                div1.id = 'div1 ' + i;
                document.getElementById("cardRow").appendChild(div1);
                for(let j = 0; j < 6; j++){
                    let div2 = document.createElement("div");
                    let image = document.createElement("img");
                    let p1 = document.createElement("p");
                    let p2 = document.createElement("p");
                    let p3 = document.createElement("p");
                    p1.className = 'center'
                    p2.className = 'center'
                    p3.className = 'center'
                    p3.style.backgroundColor = 'lightBlue'
                    p2.style.backgroundColor = 'lightGreen'
                    p1.style.backgroundColor = 'lightpink'
                    div2.style.padding ='1px'
                    image.style.border = '1px solid black'
                    image.style.height = 's12 m2 l2'
                    image.style.width = 's12 m2 l2'
                    div2.className = "col s12 m2 l2"
                    count = (i*6)+j;
                    div2.id = 'div2 ' + count;
                    document.getElementById('div1 ' + i).appendChild(div2)
                    image.id = count;
                    image.src = allPokemons[count].img
                    document.getElementById('div2 ' + count).appendChild(image)
                    p1.innerHTML = '#' + allPokemons[count].num
                    document.getElementById('div2 ' + count).appendChild(p1)
                    p2.innerHTML = 'Name: ' + allPokemons[count].pokeName
                    document.getElementById('div2 ' + count).appendChild(p2)
                    p3.innerHTML = 'Type: ' + allPokemons[count].type
                    document.getElementById('div2 ' + count).appendChild(p3)
                }
            }
            let div1 = document.createElement("div");
            div1.className = 'rowCards'
            div1.className = 'center'
            div1.id = 'div1 ' + 26;
            document.getElementById('cardRow').appendChild(div1)
            let div2 = document.createElement("div");
            let image = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            p1.className = 'center'
            p2.className = 'center'
            p3.className = 'center'
            p3.style.backgroundColor = 'lightBlue'
            p2.style.backgroundColor = 'lightGreen'
            p1.style.backgroundColor = 'lightpink'
            div2.style.padding ='7px'
            image.style.border = '1px solid black'
            image.style.height = 'col s12 m2 l2'
            image.style.width = 'col s12 m2 l2'
            div2.className = "col s12 m2 l2"
            div2.id = 'div2 ' + 150;
            document.getElementById('div1 ' + 26).appendChild(div2)
            image.id = '150'
            image.src = allPokemons[150].img
            document.getElementById('div2 ' + 150).appendChild(image)
            p1.innerHTML = '#' + allPokemons[150].num
            document.getElementById('div2 ' + 150).appendChild(p1)
            p2.innerHTML = 'Name: ' + allPokemons[150].pokeName
            document.getElementById('div2 ' + 150).appendChild(p2)
            p3.innerHTML = 'Type: ' + allPokemons[150].type
            document.getElementById('div2 ' + 150).appendChild(p3)
            $("img").hover(function(){
                $(this).css("background-color", "yellow");
                $(this).css('cursor', 'pointer');
                }, function(){
                $(this).css("background-color", "lightGray");
            });
            $('img').on("click", function(event){
                document.getElementById('container2').style.display = "block";
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0;
                let i = parseInt(event.target.id)
                document.getElementById('cardImg').src = allPokemons[i].img
                document.getElementById('name').innerHTML = 'Current Pocket Monster Card: ' + allPokemons[i].pokeName + ' #' + allPokemons[i].num
                document.getElementById('height').innerHTML = 'Height: ' + allPokemons[i].height
                document.getElementById('weight').innerHTML = 'Weight: ' + allPokemons[i].weight
                document.getElementById('type').innerHTML = 'Type: ' + allPokemons[i].type
                document.getElementById('weakness').innerHTML = 'Weaknesses: ' + allPokemons[i].weaknesses
                document.getElementById('candy').innerHTML = 'Candy: ' + allPokemons[i].candy
            })

        }
    });
};

class Pokemon {
    constructor(num, pokeName, type, img, height, weight, weaknesses, candy){
        this.num = num
        this.pokeName = pokeName
        this.type = type
        this.img = img
        this.height=height
        this.weight = weight
        this.weaknesses = weaknesses
        this.candy = candy
    }

    
}

showCard = () => {
    let i = Math.floor(Math.random() * 151);
    document.getElementById('container2').style.display = "block";
    document.getElementById('cardImg').src = allPokemons[i].img
    document.getElementById('name').innerHTML = 'Current Pocket Monster Card: ' + allPokemons[i].pokeName + ' #' + allPokemons[i].num
    document.getElementById('height').innerHTML = 'Height: ' + allPokemons[i].height
    document.getElementById('weight').innerHTML = 'Weight: ' + allPokemons[i].weight
    document.getElementById('type').innerHTML = 'Type: ' + allPokemons[i].type
    document.getElementById('weakness').innerHTML = 'Weaknesses: ' + allPokemons[i].weaknesses
    document.getElementById('candy').innerHTML = 'Candy: ' + allPokemons[i].candy
}