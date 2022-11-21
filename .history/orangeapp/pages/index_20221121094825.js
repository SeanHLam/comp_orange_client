import { BackGround, Wrapper } from "../styles/globals"
import Login from "./comps/login"

export default function Home() {
  return (
    <BackGround>
      <Wrapper>
        <Login />
      </Wrapper>
    </BackGround>
  )
}
