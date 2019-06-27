import React from 'react';
import LayoutHome from '../../Components/LayoutHome';

class Perfil extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <LayoutHome>
                <div className="container">
                    <h2>Perfil</h2>
                </div>
            </LayoutHome>
        );
    }
}

export default Perfil;



