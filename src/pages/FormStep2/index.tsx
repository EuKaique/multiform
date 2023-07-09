import { Container } from "./styles"
import { Theme } from "../../components/Theme"
import { useNavigate, Link } from "react-router-dom"
import { FormActions, useForm } from "../../contexts/FormContext"
import { useEffect } from "react"
import { SelectOption } from "../../components/SelectOption"

export const FormStep2 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    },[])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step3')
        }else{
            alert('Digite seu nome')
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <Container>
                <p>Passo 2/4</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor descreve você profissionalmente.</p>

                <hr/>

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption 
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <Link to="/" className="back-button">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    )
}