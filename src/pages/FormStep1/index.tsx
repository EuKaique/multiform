import { Container } from "./styles"
import { Theme } from "../../components/Theme"
import { useNavigate } from "react-router-dom"
import { FormActions, useForm } from "../../contexts/FormContext"
import { ChangeEvent, useEffect } from "react"

export const FormStep1 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step2')
        }else{
            alert('Digite seu nome')
        }
    }

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <Container>
                <p>Passo 1/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleChangeName}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    )
}