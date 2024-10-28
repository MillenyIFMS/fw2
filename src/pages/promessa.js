import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useEffect, useState } from "react";


export default function Promessa(){


    const [prometido, setPrometido] = useState("")
    useEffect(() => { 
    setTimeout(() => {
        setPrometido(mudaTexto("Ola Texto novo"));
        document.title="Promessa é divida"
    }, 4000);
    });
    return<>
    <Menu /> 
    <Container>
     Promessa {prometido === "" ? <img src="./gif fw2.gif" width={200} height={100}/> : prometido}
    </Container>
    <Footer />
    </>
}

function mudaTexto(texto) {
    return new Promisse ((resolva) => 
        setTimeout(() => {
         resolva(texto);

    }, 1000)

)
};