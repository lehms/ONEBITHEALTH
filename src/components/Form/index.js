import { View, Button, TextInput, Text } from "react-native";
import React, { UseState, useState } from "react";
import ResultImc from "./ResultImc";

export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageIMC, setMessageImc] = useState("digite seu peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("CALCULAR IMC ")

    function imcCalculator(){
        return setImc((peso/(altura*altura)).toFixed(2))
    }
    
    function validation(){
        if( peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Resultado do seu imc = ")
           setTextButton("Calcular Novamente")
           return
        }
        setImc(null)
        setTextButton("CALCULAR")
        setMessageImc("Preencha Peso E Altura")
    }




    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="EX. 1.80"
                keyboardType="numeric"
                />

        <Text>Peso</Text>
                <TextInput
                placeholder="EX. 75.5"
                keyboardType="numeric"
                />

                <Button title={textButton}/>

            </View>
            <ResultImc
            messageImc={messageImc}
            ResultImc={imc}
            />
        </View>
    );
}