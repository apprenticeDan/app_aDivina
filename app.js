let numSecreto = 5
let reps = 0;
let maxReps = 3
let numDelJugador;
let veces = "vez"

while(numSecreto != numDelJugador) {
    numDelJugador = parseInt(prompt("adivina un número entre el 1 y 10: "))
    reps+=1
    console.log("numJugador: "+numDelJugador);

    if (numDelJugador == null || numDelJugador == NaN) {
        alert("entrada no valida!")
        break;
    }
    if (numSecreto == numDelJugador) {
        alert(`el número es: ${numSecreto}. Acertaste en ${reps} ${reps>1? "veces": "vez"}.`)
    } else {
        if (numSecreto > numDelJugador) {
            alert("No acertaste! el número secreto es más alto")
        } else {
            alert("No acertaste! el número secreto es más bajo")
        }
    }
    if (reps > maxReps) {
        alert(`Tus ${maxReps} intentos se agotaron`)
        break
    }

}