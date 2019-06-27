import React, { useState } from 'react';
import imageview from '../../Static/Images/undraw_press_play_bx2d.svg';
import { Link } from 'react-router-dom';
import { inputHandler } from '../../Util';

const Cadastro: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log({nome, senha, email})
    }
    
    return (
        <div className="divided-view">
            <div className="form-view padder">
                <div className="text-container">
                    <h2>Cadastre-se!</h2>
                    <h4>E participe da nossa comunidade :)</h4>
                </div>

                <form className="form-group" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Nome</label>
                        <input className="input" type="text" placeholder="seu nome" value={nome} onChange={inputHandler(setNome)} />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input className="input" type="email" placeholder="email@exemplo.com" value={email} onChange={inputHandler(setEmail)} />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input className="input" type="password" placeholder="sua senha" value={senha} onChange={inputHandler(setSenha)} />
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

export default Cadastro;
