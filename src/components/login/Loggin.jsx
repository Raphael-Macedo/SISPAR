import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../..//assets/Tela Login/logo-ws.png"
function Loggin(){
    return(
        <>
       <main>
        <section>
            
        </section>

        <section>
            <img src={Logo} alt="Logo da Wilson sons" />
            <h1>Boas vindas ao Novo Portal SISPAR</h1>
            <h2>Sistema de Emissão de Boletos e Parcelamento </h2>
            <form action="">
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Password" />
                <a href="">Esqueci minha senha</a>
            </form>

            <div>
                <button>Entrar</button>
                <button>Criar conta</button>
            </div>
        </section>
       </main>
        
        </>

    )
}
export default Loggin