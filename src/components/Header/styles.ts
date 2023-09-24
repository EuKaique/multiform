import { styled } from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid #16195C;

    @media (max-width: 576px){
        padding: 1rem 0 1rem 2rem;
    
        h1{
            margin: 0;
            padding: 0;
            font-size: 1.3em;
        }
        p{
            font-size: 1em;
            color: #B8B8D4;
        }
    }

    @media (min-width: 577px){
        padding: 2em 0;

        h1{
            margin: 0;
            padding: 0;
            font-size: 2.4em;
        }
        p{
            font-size: 1.2em;
            color: #B8B8D4;
        }
    }

`