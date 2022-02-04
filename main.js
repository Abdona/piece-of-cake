let IntialCalculatedOptions = ["Radius","Angle","Chord","SurfaceArea","ArcLength"];
let targetType;
let firstInput={},secondInput={};

function area(radius,angle) {
    return Math.PI*radius*radius*(angle/360);
    
}

function arclength(radius,angle) {
    return 2*Math.PI*radius*(angle/360)
}

function lengthchord(radius,angle) {
    return 2*radius*Math.sin(angle/2)
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
    if(ParmOneType == 'area' && ParmTwoType == 'arclength')
    return (ParmOne/ParmTwo)*2
    // if(ParmOneType == 'area' && ParmTwoType == 'chord')
    // return (1/720)*Math.PI*r*(an)
    // if(ParmOneType == 'area' && ParmTwoType == 'arclength')
    // return (ParmOne/ParmTwo)*2
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
    switch (TargetType) {
        case 'Chord' :
            if(FiInput.type === 'Radius')
            console.log(lengthchord(FiInput.value,SecInput.value))
            else
            console.log(lengthchord(SecInput.value,FiInput.value))
            break;
        case 'SurfaceArea':
            if(FiInput.type === 'Radius')
            console.log(area(FiInput.value,SecInput.value))
            else
                console.log(area(SecInput.value,FiInput.value))
            break;
        case 'ArcLength':
            if(FiInput.type === 'Radius')
            console.log(arclength(FiInput.value,SecInput.value))
            else
            console.log(arclength(SecInput.value,FiInput.value))
            break;
        case 'Radius':
            console.log(radius(FiInput,SecInput))
            break;
        case 'Angle':
            console.log(angle(FiInput,SecInput))
            break;
        default:
            break;
    }
        
}