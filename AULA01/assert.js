//validator
function assertEquals(actual, expect, message = ''){
    if(actual !== expect){
        console.error(`❌ Falhou: ${message} - Esperado ${expect},
            Recebido: ${actual}`)
            return
    }
    console.log(`✅ Passou: ${message}`);
}


function soma(a, b){
    return a + b;
}