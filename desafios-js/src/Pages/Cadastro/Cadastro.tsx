import React from 'react';
import imageview from '../../Static/Images/undraw_press_play_bx2d.svg';
import { Link } from 'react-router-dom';


class Cadastro extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    onSubmit = () => {
        
    }
    
    public render() {
        return (
            <div className="divided-view">
                <div className="form-view padder">
                    <div className="text-container">
                        <h2>Cadastre-se!</h2>
                        <h4>E participe da nossa comunidade :)</h4>
                    </div>

                    <form className="form-group">


                        <div className="input-group">
                            <label>Nome</label>
                            <input className="input" type="email" placeholder="seu nome" />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input className="input" type="email" placeholder="email@exemplo.com" />
                        </div>

                        <div className="input-group">
                            <label>Senha</label>
                            <input className="input" type="password" placeholder="sua senha" />
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Cadastrar</button>

                        <div className="text-container">
                            <span>Já possui uma conta?</span>
                            <Link to="/login" className="btn">Entre aqui</Link>
                        </div>
                    </form>
                </div>

                <div className="view login-imageview">
                    <img src={imageview} className="image-fluid" />
                </div>
            </div>
        );
    }
}

export default Cadastro;
