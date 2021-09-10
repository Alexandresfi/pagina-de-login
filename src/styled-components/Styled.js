import styled from 'styled-components';

export const InputArea = styled.div`

    height: 3.125rem;
    width: calc(100% - 2rem);
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 15px;

         label{
            position: absolute;
            left: 6.5625rem;
            bottom: 1.7rem;
            font-size: 0.875rem;
            font-weight: 500;
            color:#7a7a7a;
            pointer-events: none;
            transition: .2s;
         }

            input{
                    padding: 0.75rem 1.5625rem 0;
                    height: 100%;
                    width: 26vw;
                    background-color: #f4f4f4;
                    border: 1px solid transparent;
                    border-radius: 25px;
                    font-size: .875rem;
                    color: #222;
                    box-shadow:0 0 2px rgba(0,0,0,0.2);;
                    outline: none;
                    margin: 0 auto 5px auto;
                 }

                 @media (max-width: 1024px){
                    input{
                        width: 100vw;
                    }

                    label{
                        left: 2rem;
                    }
                 }

            
`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 610px;
    width: 800px;
    border-radius: 10px;
    padding: 10vw;
    

        h1{
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            font-weight: 700;
            margin-block-start: 0.67em;
            margin-block-end: 0.67em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            }

            button{
                border: 1px solid transparent;
                border-radius: 25px;
                background-color:#04943c;
                color: white;
                height: 3.125rem;
                width: 26vw;
                font-size: 1rem;
                font-weight: 500;
                outline: none;
            }
            
            .link{
                color:#7a7a7a;
                margin-top: 1rem;
                font-size: 0.80rem;
            }
            
            .line{
                margin: 1.25rem 0;
                height: 1px;
                width: 12.5rem;
                background-color: #dadde1;
            }
            
            .end{
                background-color: #fff;
                color: #04943c;
                box-shadow: 0 0 2px rgba(0,0,0,0.2);

                border: 1px solid transparent;
                border-radius: 25px;
                text-decoration: none;
                padding-top: 10px;
                text-decoration: none;

                
                height: 3.125rem;
                width: 26vw;
                font-size: 1rem;
                font-weight: 500;
                outline: none;
            }


            @media (max-width: 1024px){

                display: flex;
                flex-direction: column;
                height: 55vh;
                width: 360px;
                margin-left: -62px;

                button, .end{
                    width: 65vw;
                }

                h1{
                    margin-top: -10px;
                    padding-bottom: 20px;
                }
            }
`;
