import { Container } from "./styles"
import { Theme } from "../../components/Theme"
import { useNavigate } from "react-router-dom"
import { FormActions, useForm } from "../../contexts/FormContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const FormStep4 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.email === '' && state.github === ''){
            navigate('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    },[])

    const handleSubmit = () => {
        if(Object.keys(state).length > 2){
            alert('Dados cadastrados com sucesso!')
        }
    }

    return (
        <Theme>
            <Container>
                <p>Passo 4/4</p>
                <h1>{state.name}, as informações estão corretas?</h1>
                <p>Confirme seus dados para finalizar o cadastro</p>

                <hr/>

                <p className="label-class">Nome:<span>{state.name}</span></p>
                <p className="label-class">Nível profissional: 
                    <span>{
                        state.level === 0 ? 'Programador iniciante 🥳' : 'Programador experiente  😎'
                    }</span>
                </p>
                <p className="label-class">E-mail:<span>{state.email}</span></p>
                <p className="label-class">Github:<span>{state.github}</span></p>

                <Link to="/step3" className="back-button">Voltar</Link>
                <button onClick={handleSubmit}>Finalizar cadastro</button>
            </Container>
        </Theme>
    )
}