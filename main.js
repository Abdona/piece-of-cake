let IntialCalculatedOptions = ["Radius","Angle","Chord","SurfaceArea","ArcLength"];
let targetType;
let firstInput={},secondInput={};
let r,theta;

function validateInput(param) {
    if (param.value <= 0) {
        alert(`Please Enter a valid value`)
    }
}

function surfacearea(ParamOne,ParamTwo) {
    let ArrayOfParam = [ParamOne,ParamTwo]
    r=ArrayOfParam.filter(elem=>{return elem.type==='Radius'})[0].value;
    theta = r=ArrayOfParam.filter(elem=>{return elem.type==='Angle'})[0].value;
    return Math.PI*r*r*(theta/360);
}

function arclength(ParamOne,ParamTwo) {
    let ArrayOfParam = [ParamOne,ParamTwo]
    r=ArrayOfParam.filter(elem=>{return elem.type==='Radius'})[0].value;
    theta = ArrayOfParam.filter(elem=>{return elem.type==='Angle'})[0].value;
    return 2*Math.PI*r*(theta/360)
}

function lengthchord(ParamOne,ParamTwo) {
    let ArrayOfParam = [ParamOne,ParamTwo];
    r=ArrayOfParam.filter(elem=>{return elem.type =='Radius'})[0].value;
    theta = ArrayOfParam.filter(elem=>{return elem.type =='Angle'})[0].value;
    return 2*r*Math.sin((Math.PI*theta)/(2*180))
}

function radius(ParmOne,ParmTwo) {
    let ArrayOfParam = [ParmOne,ParmTwo];
    if(ParmOne.type == 'Angle' && ParmTwo.type == 'SurfaceArea' || ParmTwo.type == 'Angle' && ParmOne.type == 'SurfaceArea' ){
        return ( Math.sqrt((360*ArrayOfParam.filter(obj => {
            return obj.type === 'SurfaceArea'
          })[0].value)/((Math.PI)*ArrayOfParam.filter(obj => {
            return obj.type === 'Angle'
          })[0].value)));
    }
    if(ParmOne.type == 'Angle' && ParmTwo.type == 'ArcLength' || ParmTwo.type == 'Angle' && ParmOne.type == 'ArcLength' ){
        return (360*ArrayOfParam.filter(obj => {
            return obj.type === 'ArcLength'
          })[0].value/(2*(Math.PI)*ArrayOfParam.filter(obj => {
            return obj.type === 'Angle'
          })[0].value));
    }
    if(ParmOne.type == 'Angle' && ParmTwo.type == 'Chord' || ParmTwo.type == 'Angle' && ParmOne.type == 'Chord' ){
        return ArrayOfParam.filter(obj => {
            return obj.type === 'Chord'
          })[0].value/(2*(Math.sin(ArrayOfParam.filter(obj => {
            return obj.type === 'Angle'
          })[0].value)));
    }
    if(ParmOne.type == 'SurfaceArea' && ParmTwo.type == 'ArcLength' || ParmTwo.type == 'SurfaceArea' && ParmOne.type == 'ArcLength')
    return (ArrayOfParam.filter(elem => {return elem.type==='SurfaceArea'})[0].value/ArrayOfParam.filter(elem => {return elem.type==='ArcLength'})[0].value)*2
}

function angle(ParmOne,ParmTwo) {
    let ArrayOfParam = [ParmOne,ParmTwo];
    if(ParmOne.type == 'Radius' && ParmTwo.type == 'SurfaceArea' || ParmTwo.type == 'Radius' && ParmOne.type == 'SurfaceArea' ){
        return ( (360*ArrayOfParam.filter(obj => {
            return obj.type === 'SurfaceArea'
          })[0].value/((Math.PI)*ArrayOfParam.filter(obj => {
            return obj.type === 'Radius'
          })[0].value*ArrayOfParam.filter(obj => {
            return obj.type === 'Radius'
          })[0].value)));
    }
    if(ParmOne.type == 'Radius' && ParmTwo.type == 'ArcLength' || ParmTwo.type == 'Radius' && ParmOne.type == 'ArcLength' ){
        return (360*ArrayOfParam.filter(obj => {
            return obj.type === 'ArcLength'
          })[0].value/(2*(Math.PI)*ArrayOfParam.filter(obj => {
            return obj.type === 'Radius'
          })[0].value));
    }
    if(ParmOne.type == 'Radius' && ParmTwo.type == 'Chord' || ParmTwo.type == 'Radius' && ParmOne.type == 'Chord' ){
        return Math.asin(ArrayOfParam.filter(obj => {
            return obj.type === 'Chord'
          })[0].value/(2*(Math.sin(ArrayOfParam.filter(obj => {
            return obj.type === 'Radius'
          })[0].value)))*2);
    }
    if(ParmOne.type == 'SurfaceArea' && ParmTwo.type == 'ArcLength' || ParmTwo.type == 'SurfaceArea' && ParmOne.type == 'ArcLength'){
        let r = radius(ParmOne,ParmTwo)
        console.log(r);
        return ( (360*ArrayOfParam.filter(elem=> {return elem.type === 'SurfaceArea'})[0].value)/(
            Math.PI*r*r )
            )
    }
    if(ParmOne.type == 'Chord' && ParmTwo.type == 'ArcLength' || ParmTwo.type == 'Chord' && ParmOne.type == 'ArcLength'){
        return ((Math.PI/360)*ArrayOfParam.filter(elem=> {return elem.type==='SurfaceArea'})[0].value/(
            Math.PI*r*r
        ))
    }
}

function UpdateCalOptions(){
    firstInput.type=document.getElementById('firstvaluetype').value
    secondInput.type = document.getElementById('secondvaluetype').value

    let UpdatedCalculatedOptions = IntialCalculatedOptions.filter((element)=>{ 
        return (element != firstInput.type)
    });
    UpdatedCalculatedOptions = UpdatedCalculatedOptions.filter((element)=>{ 
        return (element != secondInput.type)
    });
    document.getElementById('optionone').innerText=UpdatedCalculatedOptions.pop();
    document.getElementById('optiontwo').innerText=UpdatedCalculatedOptions.pop();
    document.getElementById('optionthree').innerText=UpdatedCalculatedOptions.pop();
}

function UserInput() {
    firstInput.value = document.getElementById('firstvalue').value
    secondInput.value = document.getElementById('secondvalue').value

    var e = document.getElementById("calculatedvalue");
    var targetType = e.options[e.selectedIndex].text;
    calculate(firstInput,secondInput,targetType);
}
function calculate(FiInput,SecInput,TargetType) {
    if(FiInput.type=='Radius' && SecInput.type==='Angle' || FiInput.type=='Angle' && SecInput.type==='Radius')
    {
        switch (TargetType) {
            case 'Chord':
                alert(`${TargetType}:${(lengthchord(FiInput,SecInput))}`)
                break;
            case 'SurfaceArea':
                alert(`${TargetType}:${(surfacearea(FiInput,SecInput))}`)
                break;
            case 'ArcLength':
                alert(`${TargetType}:${(arclength(FiInput,SecInput))}`)
                break;
            default:
                break;
        }
    }
    if(FiInput.type=='Radius' && SecInput.type !=='Angle'|| SecInput.type==='Radius' && FiInput.type !=='Angle')
    {
        theta={};
        switch (TargetType) {
            case 'Chord':
                theta.value = angle(FiInput,SecInput);
                theta.type = 'Angle'
                console.log(theta)
                FiInput.type == 'Radius' ? alert(`${TargetType}:${(lengthchord(FiInput,theta))}`) : alert(`${TargetType}:${(lengthchord(theta,SecInput))}`);
                break;
            case 'SurfaceArea':
                theta.value = angle(FiInput,SecInput);
                theta.type = 'Angle'
                console.log(theta)
                FiInput.type == 'Radius' ? alert(`${TargetType}:${(lengthchord(FiInput,theta))}`) : alert(`${TargetType}:${(lengthchord(theta,SecInput))}`);
                break;
            case 'Angle':
                alert(`${TargetType}:${(angle(FiInput,SecInput))}`)
                break;
            case 'ArcLength':
                theta.value = angle(FiInput,SecInput);
                theta.type = 'Angle'
                console.log(theta)
                FiInput.type=='Radius' ? alert(`${TargetType}:${(arclength(FiInput,theta))}`) : alert(`${TargetType}:${(arclength(theta,SecInput))}`);
                break;
            default:
                break;
        }
    }

    if(FiInput.type=='Angle' && SecInput.type !=='Radius'|| SecInput.type==='Angle' && FiInput.type !=='Radius')
    {
        r={};
        switch (TargetType) {
            case 'Chord':
                r.value = radius(FiInput,SecInput);
                r.type = 'Radius'
                console.log(r)
                FiInput.type == 'Angle' ? alert(`${TargetType}:${(lengthchord(FiInput,r))}`) : alert(`${TargetType}:${(lengthchord(r,SecInput))}`);
                break;
            case 'SurfaceArea':
                r.value = radius(FiInput,SecInput);
                r.type = 'Radius'
                console.log(theta)
                FiInput.type == 'Angle' ? alert(`${TargetType}:${(lengthchord(FiInput,r))}`) : alert(`${TargetType}:${(lengthchord(r,SecInput))}`);
                break;
            case 'Radius':
                alert(`${TargetType}:${(radius(FiInput,SecInput))}`)
                break;
            case 'ArcLength':
                r.value = radius(FiInput,SecInput);
                r.type = 'Radius'
                console.log(r)
                FiInput.type=='Angle' ? alert(`${TargetType}:${(arclength(FiInput,r))}`) : alert(`${TargetType}:${(arclength(r,SecInput))}`);
                break;
            default:
                break;
        }
    }

    if(FiInput.type=='SurfaceArea' && SecInput.type==='ArcLength' || SecInput.type=='SurfaceArea' && FiInput.type==='ArcLength' )
    {
        r={};
        theta={};
        switch (TargetType) {
            case 'Chord':
                r.value = radius(FiInput,SecInput);
                r.type = 'Radius'
                theta.value=angle(FiInput,SecInput);
                theta.type='Angle'
                alert(`${TargetType}:${(lengthchord(r,theta))}`)
                break;
            case 'Radius':
                alert(`${TargetType}:${(radius(FiInput,SecInput))}`)
                break;
            case 'Angle':
                alert(`${TargetType}:${(angle(FiInput,SecInput))}`)
                break;
            default:
                break;
        }
    }

    var c = document.getElementById("circle");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, r, 0, 2 * Math.PI);

    ctx.moveTo(100, 75);
    ctx.lineTo(100 + r * Math.cos(0), 75 + r * Math.sin(0));

    ctx.moveTo(100, 75);
    ctx.lineTo(100 + r * Math.cos(Math.PI * theta / 180.0), 75 + r * Math.sin(Math.PI * theta / 180.0));

    ctx.lineTo(100 + r * Math.cos(0), 75 + r * Math.sin(0));
    ctx.moveTo(100 + r * Math.cos(Math.PI * theta / 180.0), 75 + r * Math.sin(Math.PI * theta / 180.0));
    ctx.stroke();
}
