$(document).ready(initPage);

function initPage()
{	$('#formRegistro').submit(enviarFormulario);

	Parse.initialize("nykzDU7sm8oK5Y3yw5pzEXQIlAKWaKRml5V3NEC2", "662S5BkSe1S9a7h9fUaybtu0ZWbRViTGOiRZ7Uoi");
	/*var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  	alert("yay! it worked");
	});*/ }

function enviarFormulario(){
        var cliente=Parse.Object.extend("cliente");
        var instancia=new cliente();
        instancia.save({
            /*nombre:"lala",apellido:"lalrala"  */
            nombre:('#nombre').val(),apellido:('#apellido').val() 
        }).then(function(){
            alert('Registro guardado')
        })
    }

func
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
	$("#myForm").validate(opciones);
}
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



	//<script>
  //window.fbAsyncInit = function() {
    //FB.init({
      //appId      : '630441820426859',
      //xfbml      : true,
      //version    : 'v2.5'
    //});
  //};

  //(function(d, s, id){
    // var js, fjs = d.getElementsByTagName(s)[0];
    // if (d.getElementById(id)) {return;}
     //js = d.createElement(s); js.id = id;
     //js.src = "//connect.facebook.net/en_US/sdk.js";
     //fjs.parentNode.insertBefore(js, fjs);
   //}(document, 'script', 'facebook-jssdk'));
//</script>
