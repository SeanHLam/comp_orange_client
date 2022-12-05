import styled from 'styled-components';
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export default function Login({ }) {
    const router = useRouter()

    useEffect(() => {
        localStorage.clear();

    });

    const [newUser, setNewUser] = useState('');
    const [userPassword, setPassword] = useState('');
    const [validPath, setValidPath] = useState("");
    const updateNewUser = (e) => {
        setNewUser(e.target.value)
    }

    const updatePass = (e) => {
        setPassword(e.target.value)
    }

    // const HandleChange = () => {
    //     fetch(`http://localhost:3001/add-user?name=${newUser}&pass=${password}`)
    //         .then(async (res) => {
    //             const data = await res.json()
    //             if (typeof data !== 'undefined' && data.length > 0) {
    //                 localStorage.setItem('currentUser', data[0].id);
    //                 setValidPath("/game")

    //             } else {
    //                 localStorage.setItem('currentUser', "");
    //                 setValidPath("/")
    //                 alert("Invalid Login")

    //             }

    //         })
    // }

    const HandleNewUser = () => {
        fetch(`http://localhost:3001/add-new-user?name=${newUser}&password=${userPassword}`)
            .then(async (res) => {
                const data = await res.json()
                console.log(data)

            })
        console.log("Button clicked")
    }

    const handlePage = (e) => {
        e.preventDefault()
        router.push(validPath)
    }

    return (
        <div>
            <FormCont onSubmit={handlePage} method="post">
                <h2>Sign In/Register</h2>
                <input
                    type="text"
                    value={newUser}
                    onChange={updateNewUser}
                    id="user"
                    name="user"
                    className='input'
                    placeholder="Username..." />
                <input
                    type="password"
                    value={userPassword}
                    onChange={updatePass}
                    id="pass"
                    name="pass"
                    className='input'
                    placeholder="Password..." />
                <SubmitButton onClick={() => {
                    //HandleChange()
                }}
                    type="submit">Submit</SubmitButton>
            </FormCont>
            <div>
                <h2>New Account?</h2>
                <FormCont method='post'>
                    <Inputcont
                        type="text"
                        value={newUser}
                        onChange={updateNewUser}
                        id="user"
                        name="test"
                        className='input'
                        placeholder="Enter New Username" />
                    <Inputcont
                        type="password"
                        value={userPassword}
                        onChange={updatePass}
                        id="pass"
                        name="pass"
                        className='input'
                        placeholder="Password..." />
                    <SubmitButton onClick={() => {
                        HandleNewUser()
                    }}
                        type="submit">Submit</SubmitButton>
                </FormCont>
            </div>
        </div>

    )
}

//Styles
const FormCont = styled.form`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
align-content:center;
width: 35%;
margin: 1%;
`
const SubmitButton = styled.button`
width: 100px;
height: 40px;
font-size: 16px;
margin: 30px;
`

const Inputcont = styled.input `
width: 200px;
height: 30px;
margin: 10px;
`