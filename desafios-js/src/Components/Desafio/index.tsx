import React, { ReactNode, StatelessComponent } from 'react';
interface IDesafio {
    id: Number,
    title: String,
    descricao: String,
    author: String,
    dataInicio: Date,
    dataFim: Date
}

interface ComponentBProps {
    children?: ReactNode;
    desafio: IDesafio;
}

const Desafio = ({ desafio }: ComponentBProps) => {
    return (
        <div className="desafio">
            <img className="image-fluid" src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461263-node.js-JavaScript-748x421.jpg" />
            <div className="content">

                <h2 className="desafio-titulo">{desafio.title}</h2>
                <div className="desafio-descricao">
                    <p>{desafio.descricao}</p>
                </div>

                <div className="row dates">
                    <div className="col">
                        <strong>Data de Início</strong>
                        <p>{desafio.dataInicio.getDay()}/{desafio.dataInicio.getMonth()}/{desafio.dataInicio.getFullYear()}</p>
                    </div>
                    <div className="col">
                        <strong>Prazo máximo</strong>
                        <p>{desafio.dataFim.getDay()}/{desafio.dataFim.getMonth()}/{desafio.dataFim.getFullYear()}</p>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col">
                        12 participantes
                </div>

                    <div className="col">
                        <small>posted by: {desafio.author}</small>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Desafio;
