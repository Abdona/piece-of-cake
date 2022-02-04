let IntialCalculatedOptions = ["Radius","Angle","Chord","SurfaceArea","ArcLength"];
function Calculate() {
    let firstInput = document.getElementById('firstvalue').value
    let firstInputType=document.getElementById('firstvaluetype').value

    let secondInput = document.getElementById('secondvalue').value
    let secondInputType = document.getElementById('secondvaluetype').value


    let UpdatedCalculatedOptions = IntialCalculatedOptions.filter((element)=>{ 
        return (element !==firstInputType)
    });
    UpdatedCalculatedOptions = UpdatedCalculatedOptions.filter((element)=>{ 
        return (element !==secondInputType)
    });

    document.getElementById('optionone').innerText=UpdatedCalculatedOptions.pop();
    document.getElementById('optiontwo').innerText=UpdatedCalculatedOptions.pop();
    document.getElementById('optionthree').innerText=UpdatedCalculatedOptions.pop();
}