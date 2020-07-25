import React from 'react'
import ReactDOM from 'react-dom'
// import BomDia from './componentes/BomDia'
// import Primeiro from './componentes/Primeiro'
// import Multi, {BoaNoite} from './componentes/Multiplus'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        {/* <Primeiro />
        <BomDia nome="Fernando" idade={39}/>
        <Multi.BoaTarde nome="Miguel"/>
        <BoaNoite nome='Lilica' /> */}
        {/* <Saudacao tipo="Bom Dia" nome="Fernando"/> */}
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Miguel"/>
            <Filho nome="Maria"/>
        </Pai>

    </div>
    , document.getElementById('root'))