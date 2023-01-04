const space={
    earth:{
        gravity:1.0,
        image:'earth.png'
    },
    venus:{
        gravity:0.91,
        image:'venus.png'
    },
    mercury:{
        gravity:0.38,
        image:'mercury.png'
    },
    mars:{
        gravity:0.38,
        image:'mars.png'
    },
    jupiter:{
        gravity:2.34,
        image:'jupiter.png'
    },
    saturn:{
        gravity:0.93,
        image:'saturn.png'
    },
    uranus:{
        gravity:0.92,
        image:'uranus.png'
    },
    neptune:{
        gravity:1.12,
        image:'neptune.png'
    },
    moon:{
        gravity:1.62,
        image:'moon.png'
    }
}

const inputEl=document.querySelector('input')
const selectOption=document.querySelector('select')
const button = document.getElementById('cal-btn')
const planetContainer=document.querySelector('.planet-container')

let weight;

const containerUI=(img,text,planetName)=>{
    let image=document.createElement('img')
    image.src=`./images/${img}`
    let para=document.createElement('p')
    para.textContent=text+'N';
    para.className='big'
    let message=document.createElement('p')
    message.className='message'
    let newName=planetName.split(' ').map((el)=>{
        return el[0].toUpperCase()+planetName.slice(1,planetName.length)
    })
    message.textContent=`The Weight of the object on ${newName}`
    message.appendChild(para)
    planetContainer.appendChild(image)
    planetContainer.appendChild(message)
}

button.addEventListener('click',()=>{
    let src;
    planetContainer.innerHTML=''
    if(inputEl.value.length>0 && selectOption.value!=='none'){
        src=space[selectOption.value].image;
        weight=Number(inputEl.value)*space[selectOption.value].gravity;
        containerUI(src,weight.toFixed(2),selectOption.value)
    } else if(selectOption.value=='none'){
        let p=document.createElement('p')
        p.className='message';
        p.textContent='Planet is Required'
        planetContainer.appendChild(p)
    } 
    else{
        let p=document.createElement('p')
        p.className='message';
        p.textContent='Mass is Required'
        planetContainer.appendChild(p)
    }
})