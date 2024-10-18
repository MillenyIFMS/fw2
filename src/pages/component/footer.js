import { Container } from "react-bootstrap";
import style from "@/styles/footer.module.css"

export default function Footer() {
 return (
    <>
    <Container> 
        <footer className={`${style.footergradiente}  my-3 border-5 border border-primary-subtle rounded rounded-3` }>
            <ul className="nav justify-content-center border-bottom border-primary-subtle  border-5"> 
                <li className="border-button"> Disciplina de Frameworks 2</li>
            </ul>
         <p className="text-center"> &copy; 2024 - IFMS </p>
         </footer>
        </Container>
        
    </>
 );
}