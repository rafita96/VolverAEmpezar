import Ejercicio from './Ejercicio.jsx';
import Fin from './Fin.jsx';
import Instrucciones from './Instrucciones.jsx';
import Bloque from './Bloque.jsx';

class Main extends React.Component {
    constructor(props){
        super(props);

        // El inicio debe estar en false para mostrar las instrucciones
        this.state = {
            inicio: false,
            fin: false,
            porcentaje: null
        }

        this.iniciar = this.iniciar.bind(this);
        this.terminar = this.terminar.bind(this);
        this.reiniciar = this.reiniciar.bind(this);
    }

    reiniciar(){
        this.setState({
            inicio: false,
            fin: false,
            porcentaje: null
        });
    }

    iniciar(){
        this.setState({
            inicio: true
        });
    }

    terminar(porcentaje){
        this.setState({
            fin: true,
            porcentaje: porcentaje
        });
    }

    render(){

        if(this.state.fin){
            return(
                <Bloque nombre={this.props.nombre}>
                    <Fin paciente={this.props.paciente} reiniciar={this.reiniciar} porcentaje={this.state.porcentaje} />
                </Bloque>
            );
        }else if(this.state.inicio){
            return(
                <Bloque nombre={this.props.nombre}>
                    <Ejercicio terminar={this.terminar} parte2={this.props.parte2} />
                </Bloque>
            );
        }else{
            return(
                <Bloque nombre={this.props.nombre}>
                    <Instrucciones 
                        iniciar={this.iniciar} 
                        instrucciones={this.props.instrucciones} />
                </Bloque>
            );
        }

    }
}

var init = function (paciente, nombre, instrucciones){
    ReactDOM.render(<div>
        <Main
        paciente={paciente}  
        nombre={nombre} 
        instrucciones={instrucciones["instrucciones"]}
        parte2={instrucciones["parte2"]} /></div>, document.getElementById('main'));
}

export {init};
export default Main;