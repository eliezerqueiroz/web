

    function getUfs(){
        console.log("estados");
        
        const ufSelect = document.querySelector("select[name=uf]");

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json())
        .then(states => {
            for(const state of states){
                ufSelect.innerHTML += `<option id="uf" value="${state.id}">${state.nome}</option>`    
            }
            
        } );

    }
    
    getUfs();

    function getCities(event){
        console.log("cidades");
        
        const citySelect = document.querySelector("select[name=city]");
        citySelect.innerHTML = "";
        citySelect.disabled = true;
        
        const UF = event.target.value;
        console.log(UF);
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`;
        
            fetch(url).then( res => res.json()).then(cities => {
                for(const city of cities){
                    citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`    
                }
                citySelect.disabled = false;
            } );
    }


    
    document.querySelector("select[name=uf]")
            .addEventListener("change", getCities);
