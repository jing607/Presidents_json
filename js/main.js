$(document).ready((e)=>{
    console.log("ok")
    let list, i

    list = $("ul");

    $('#btn_display').on('click',()=>{ 

        $.getJSON('js/data.json', (data)=>{
            for(i = 0; i <data.presidents.length; i++) {
               
                list.append(`<li class="col-4"><img class="imgPortrait" src="${data.presidents[i].image}" alt="${data.presidents[i].name}"></li>`);
                list.append(`<li class="col-4">Name : ${data.presidents[i].name}</li>`);
                list.append(`<li class="col-4">Mandat : ${data.presidents[i].mandat}</li>`);
                list.append(`<li class="col-4">Naissance : ${data.presidents[i].naissance}</li>`);
                list.append(`<li class="col-4">Deces : ${data.presidents[i].deces}</li>`);
                
                console.log(JSON.stringify(data.presidents[i].name))

            }
        })

    })


})