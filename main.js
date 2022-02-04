let IntialCalculatedOptions = ["Radius","Angle","Chord","SurfaceArea","ArcLength"];
let firstInputType,secondInputType,targetType;
let firstInput,secondInput;

function area(radius,angle) {
    return Math.PI*radius*radius*(angle/360);
    
}

function arclength(radius,angle) {
    return 2*Math.PI*radius*(angle/360)
}

function lengthchord(radius,angle) {
    return 2*radius*Math.sin(angle/2)
}

// function radius(ParmOne,ParmOneType,ParmTwo,ParmTwoType) {
//     if(ParmTwoType == 'angle' && ParmOneType == 'area')
//     return Math.sqrt(360*ParmOne/((Math.PI)*ParmTwo))
//     if(ParmTwoType == 'angle' && ParmOneType == 'arclength')
//     return 360*ParmOne/((Math.PI)*ParmTwo*2)
//     if(ParmTwoType == 'angle' && ParmOneType == 'chord')
//     return ParmOne/(Math.sin(ParmTwo/2)*2)
//     // if(ParmOneType == 'area' && ParmTwoType == 'arclength')
//     // return (ParmOne/ParmTwo)*2
//     // if(ParmOneType == 'area' && ParmTwoType == 'chord')
//     // return (1/720)*Math.PI*r*(an)
//     // if(ParmOneType == 'area' && ParmTwoType == 'arclength')
//     // return (ParmOne/ParmTwo)*2
// }

// function angle(ParmOne,ParmOneType,ParmTwo,ParmTwoType) {
//     if(ParmOneType == 'area')
//     return Math.sqrt(360*ParmOne/((Math.PI)*ParmTwo))
//     if(ParmOneType == 'arclength')
//     return 360*ParmOne/((Math.PI)*ParmTwo*2)
//     if(ParmOneType == 'chord')
//     return ParmOne/(Math.sin(ParmTwo/2)*2)
// }

function UpdateCalOptions(){
    firstInputType=document.getElementById('firstvaluetype').value
    secondInputType = document.getElementById('secondvaluetype').value

    let UpdatedCalculatedOptions = IntialCalculatedOptions.filter((element)=>{ 
        return (element != firstInputType)
    });
    UpdatedCalculatedOptions = UpdatedCalculatedOptions.filter((element)=>{ 
        return (element != secondInputType)
    });
    document.getElementById('optionone').innerText=UpdatedCalculatedOptions.pop();
    document.getElementById('optiontwo').innerText=UpdatedCalculatedOptions.pop();
    document.getElementById('optionthree').innerText=UpdatedCalculatedOptions.pop();
}

function UserInput() {
    firstInput = document.getElementById('firstvalue').value
    secondInput = document.getElementById('secondvalue').value

    var e = document.getElementById("calculatedvalue");
    var targetType = e.options[e.selectedIndex].text;
    calculate(firstInput,firstInputType,secondInput,secondInputType,targetType);
}
function calculate(FiInput,FiInputType,SecInput,SecInputType,TargetType) {
    switch (TargetType) {
        case 'Chord' :
            if(FiInputType === 'Radius')
            console.log(lengthchord(FiInput,SecInput))
            else
            console.log(lengthchord(SecInput,FiInput))
            break;
        case 'SurfaceArea':
            if(FiInputType === 'Radius')
            console.log(area(FiInput,SecInput))
            else
                console.log(area(SecInput,FiInput))
            break;
        case 'ArcLength':
            if(FiInputType === 'Radius')
            console.log(arclength(FiInput,SecInput))
            else
            console.log(arclength(SecInput,FiInput))
            break;
        default:
            break;
    }
        
}