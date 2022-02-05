let IntialCalculatedOptions = ["Radius","Angle","Chord","SurfaceArea","ArcLength"];
let targetType;
let firstInput={},secondInput={};
let r,theta;

function validateInput(param) {
    if (param.value <= 0) {
        alert(`Please Enter a valid value`)
    }
}

function area(radius,angle) {
    r=radius;
    theta = angle;
    return Math.PI*radius*radius*(theta/360);
}

function arclength(radius,angle) {
    r=radius;
    theta = angle;
    return 2*Math.PI*radius*(angle/360)
}

function lengthchord(radius,angle) {
    r=radius;
    theta = angle;
    return 2*radius*Math.sin((Math.PI*theta)/(2*180))
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
          })[0].value^2)));
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
        return (360*ArrayOfParam.filter(elem=> {return elem.type==='SurfaceArea'})/(
            Math.PI*r*r
        ))
    }
    if(ParmOne.type == 'Chord' && ParmTwo.type == 'ArcLength' || ParmTwo.type == 'Chord' && ParmOne.type == 'ArcLength'){
        return ((Math.PI/360)*ArrayOfParam.filter(elem=> {return elem.type==='SurfaceArea'})/(
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
    let result = document.getElementById('result').innerText
    switch (TargetType) {
        case 'Chord' :
            if(FiInput.type === 'Radius' && SecInput === 'Angle')
            alert(`${TargetType}:${(lengthchord(FiInput.value,SecInput.value))}`)
            else if (FiInput.type === 'Angle' && SecInput === 'Radius')
            alert(`${TargetType}:${(lengthchord(SecInput.value,FiInput.value))}`)
            break;
        case 'SurfaceArea':
            if(FiInput.type === 'Radius')
            alert(`${TargetType}:${(area(FiInput.value,SecInput.value))}`)
            else
            alert(`${TargetType}:${(area(SecInput.value,FiInput.value))}`)
            break;
        case 'ArcLength':
            if(FiInput.type === 'Radius')
            alert(`${TargetType}:${(arclength(FiInput.value,SecInput.value))}`)
            else
            alert(`${targetType}:${(arclength(SecInput.value,FiInput.value))}`)
            break;
        case 'Radius':
            alert(`${targetType}:${(radius(FiInput,SecInput))}`)
            r = (radius(FiInput,SecInput))
            break;
        case 'Angle':
            alert(`${targetType}:${(theta(FiInput,SecInput))}`)
            theta = (angle(FiInput,SecInput))
            break;
        default:
            break;
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
