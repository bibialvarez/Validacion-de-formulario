$(document).ready(initPage);

function initPage()
{
	var opciones ={
		rules:{
			nombre:"required",
			apellidos:"required",
			email:{
				required:true,
				email:true
			},
			password:{
				required:true,
				minlength:6,
				maxlength:12
			}
		},
		messages:{
			nombre:"Por favor ingresa tu nombre",
			apellidos:"Tu apellido tambien pues",
			email:{
				required:"Necesito tu correo",
				email:"Este no es un email"
			},
			password:{
				required:"Escribe una contraseña",
				minlength:"Tu contraseña debe tener al menos 6 caracteres",
				maxlength:"Maximo 12 caracteres"
			}
		},
		submitHandler: function()
		{
			swal("Es valido","Todo ok");
		},
		invalidHandler:function()
		{
			swal("Error","Verifica el formulario","warning");
		}

	};

	$("#myForm").validate(opciones);
}