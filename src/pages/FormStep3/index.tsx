import { Container } from "./styles"
import { Theme } from "../../components/Theme"
import { useNavigate } from "react-router-dom"
import { FormActions, useForm } from "../../contexts/FormContext"
import { ChangeEvent, useEffect } from "react"
import { Link } from "react-router-dom"

export const FormStep3 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    },[])

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleChangeGitHub = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        })
    }

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            navigate('/step4')
        }else{
            alert('Informe os dados')
        }
    }

    return (
        <Theme>
            <Container>
                <p>Passo 3/4</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha as informações, para entrarmos em contato.</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleChangeEmail}
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleChangeGitHub}
                    />
                </label>
                <Link to="/step2" className="back-button">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </Container>
        </Theme>
    )
}