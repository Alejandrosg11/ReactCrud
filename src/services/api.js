const url = 'https://ih-crud-api.herokuapp.com/characters/';

export function getCharacters(){
    return fetch(url)
        .then(r=>{
            if(!r.ok) return Promise.reject(r.statusText); 
            return r.json();
        })
        .then(characters=>{
            return characters;
        });
}

export function getCharacterById(id){
    return fetch(url + id)
    .then(r=>{
        if(!r.ok) return Promise.reject(r.statusText); 
        return r.json();
    })
    .then(character=>{
        return character;
    });
}