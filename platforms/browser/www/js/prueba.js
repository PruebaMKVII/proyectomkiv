<input name=”calif” type=”text” size=”4″ maxlength=”3″ onChange=”validaInputFloat(this);”>

//VALIDAR CALIFICACIONES

function validaFloat(value){
return(value.match(/^[0-9]+(.[0-9]+)?$/))
}

function validaInputFloat(oInput){
if (!validaFloat(oInput.value)){
alert(oInput.value + ” no es una calificación válida!”);
try{
oInput.focus();
oInput.select();
}
catch(ex){ }
return(false);
}
else{
if ((oInput.value)<6.0
oInput.style.background=”#EAEAEA”;
oInput.style.color=”red”;
}
if ((oInput.value)<5.0
alert (“Calificación no puede ser menor a 5.0″);
oInput.style.background=”#EAEAEA”;
oInput.focus();
oInput.select();
}
if ((oInput.value)> 10){
alert (“Calificación no puede ser mayor a 10″);
oInput.style.background=”#EAEAEA”;
oInput.focus();
oInput.select();
}
}

return(true);
}