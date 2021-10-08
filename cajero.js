var Cuentas = [
    { id: 1, nombre: "Arnoldo Goméz", Password: "a", saldo: "600" ,
        depositar: function(monto){
            if (parseFloat(this.saldo)+parseFloat(monto) > 990){
                return 1
            }
            else{
                var total = parseFloat(this.saldo)+parseFloat(monto);
                this.saldo = total.toString()
            }
        },
        retirar: function(monto){
            if (parseFloat(this.saldo)-monto < 10){
                return 1
            }
            else{
                var total = parseFloat(this.saldo)-monto;
                this.saldo = total.toString()
            }
        }
    },
    { id: 2, nombre: "Sandra Garay", Password: "SoyUnCacauahte", saldo: "700",
    depositar: function(monto){
        if (parseFloat(this.saldo)+parseFloat(monto) > 990){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)+parseFloat(monto);
            this.saldo = total.toString()
        }
    },
    retirar: function(monto){
        if (parseFloat(this.saldo)-monto < 10){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)-monto;
            this.saldo = total.toString()
        }
    } },
    { id: 3, nombre: "René Salas", Password: "ElAlceMexicano1", saldo: "800" ,
    depositar: function(monto){
        if (parseFloat(this.saldo)+parseFloat(monto) > 990){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)+parseFloat(monto);
            this.saldo = total.toString()
        }
    },
    retirar: function(monto){
        if (parseFloat(this.saldo)-monto < 10){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)-monto;
            this.saldo = total.toString()
        }
    }},
    { id: 4, nombre: "Lila Lu", Password: "LiluPp", saldo: "100",
    depositar: function(monto){
        if (parseFloat(this.saldo)+parseFloat(monto) > 990){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)+parseFloat(monto);
            this.saldo = total.toString()
        }
    },
    retirar: function(monto){
        if (parseFloat(this.saldo)-monto < 10){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)-monto;
            this.saldo = total.toString()
        }
    } },
    { id: 5, nombre: "Andres Mx", Password: "#AndresChamps", saldo: "900" ,
    depositar: function(monto){
        if (parseFloat(this.saldo)+parseFloat(monto) > 990){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)+parseFloat(monto);
            this.saldo = total.toString()
        }
    },
    retirar: function(monto){
        if (parseFloat(this.saldo)-monto < 10){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)-monto;
            this.saldo = total.toString()
        }
    }},
  ];
  var selectUser = document.getElementById("usuario");
  for(index in Cuentas){
    console.log(index)
    selectUser.options[selectUser.options.length] = new Option(Cuentas[index].nombre, Cuentas[index].id);
  }
  function movimientos(e,Option){
      e.preventDefault()
      const interaccion = document.getElementById("interaccion");
      interaccion.style.display = "flex"
      var usuarioSeleccionado = selectUser.value;
      switch(true){
        case Option === 1:
            console.log("consultando")
            document.getElementById("saldo").innerHTML = Cuentas[usuarioSeleccionado-1].saldo
            break;
        case Option === 2:
            console.log("Retirando")
            var monto = document.getElementById("monto");
            var cmonto = monto.value;
            var bandera = Cuentas[usuarioSeleccionado-1].retirar(cmonto)
            if (bandera == 1){
                document.getElementById("saldo").innerHTML = "No tienes suficiente dinero"
                break;
            }
            else {
                document.getElementById("saldo").innerHTML = Cuentas[usuarioSeleccionado-1].saldo
                monto.value = ""
                break;
            }
        case Option === 3:
            console.log("Depositar")
            var monto = document.getElementById("monto");
            var cmonto = monto.value;
            var bandera = Cuentas[usuarioSeleccionado-1].depositar(cmonto)
            Cuentas[usuarioSeleccionado-1].depositar(cmonto)
            console.log(Cuentas[usuarioSeleccionado-1].saldo)
            // document.getElementById("saldo").innerHTML = Cuentas[usuarioSeleccionado-1].saldo
            // monto.value = ""
            if (bandera == 1){
                document.getElementById("saldo").innerHTML = "No puedes tener mas de $990.00 en la cuenta."
                break;
            }
            else {
                document.getElementById("saldo").innerHTML = Cuentas[usuarioSeleccionado-1].saldo
                monto.value = ""
                break;
            }
        default:
            console.log("default")
      }
  }
  function Comparar(e){
      e.preventDefault();
      var passwordUsuario = document.getElementById("password");
      var usuarioSeleccionado = selectUser.value;
      console.log(usuarioSeleccionado);
      var pass = passwordUsuario.value
      console.log(pass)
      if (Cuentas[usuarioSeleccionado-1].Password== pass){
          console.log("Password correcto")
          const formularioLogin = document.getElementById("ingreso");
          formularioLogin.style.display = "none"
          const botones = document.getElementById("opcionesUsuario");
          botones.style.display = "flex"
      }
      else{
        console.log("Pasword incorrecto")
        document.getElementById("incorrecto").innerHTML = "Password incorrecto, vuelva a intentar"
        document.getElementById("password").value = ""
      }
  }