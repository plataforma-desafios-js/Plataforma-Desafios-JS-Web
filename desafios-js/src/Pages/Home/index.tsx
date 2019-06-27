import React from 'react';
import LayoutHome from '../../Components/LayoutHome';
import Desafio from '../../Components/Desafio';

interface IDesafio {
    id: Number,
    title: String,
    descricao: String,
    author: String,
    dataInicio: Date,
    dataFim: Date
}

interface IState {
    desafios?: Array<IDesafio>;
}

interface IProps { }

class Home extends React.Component<IProps, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            desafios: []
        }
    }

    async componentDidMount() {
        let date: Date = new Date();
        const desafio = {
            id: 1,
            title: "Fazer um foguete com NodeJS",
            descricao: "Fazer um foguete com NodeJS é complicado, mas faça!",
            author: "Malaquias",
            dataInicio: date,
            dataFim: new Date(date.getDate()+7)
        }
        this.setState({ desafios: [desafio] })
    }

    public render() {
        const { desafios } = this.state;
        return (
            <LayoutHome>
                <div className="container">
                    <div className="appbar">
                        <h2>Início</h2>
                    </div>

                    {desafios ? desafios.map((item, i) => <Desafio desafio={item} key={i} />) : null}
                </div>
            </LayoutHome>
        );
    }
}

export default Home;
