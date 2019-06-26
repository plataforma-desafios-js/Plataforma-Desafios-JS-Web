import React from 'react';
import LayoutHome from '../../Components/LayoutHome';

class Home extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <LayoutHome>
                <div className="container-fluid">
                    <div className="desafio">

                    </div>
                    
                </div>
            </LayoutHome>
        );
    }
}

export default Home;
