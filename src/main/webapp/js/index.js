const nombre = document.getElementById('nombre');
const facultad = document.getElementById('facultad');
const regBtn = document.getElementById('regBtn');

const registrar = ()=>{
    let profeObj = {
        id:0,
        nombre:nombre.value,
        facultad:facultad.value
    };
    console.log( JSON.stringify(profeObj) );

    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechage',()=>{
        if(xhr.readyState === 4){
            
        }
    });
    xhr.open('POST', 'https://domipython0620.herokuapp.com/api/profesores/create');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send( JSON.stringify(profeObj) );

}

regBtn.addEventListener('click', registrar);

const getAllProfesores = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === 4){
            let json = xhr.responseText;
            let response = JSON.parse(json);
            console.log(response);
        }
    });
    xhr.open('GET', 'https://pacific-reef-01296.herokuapp.com/api/profesores/all');
    xhr.send();
    
}

getAllProfesores();