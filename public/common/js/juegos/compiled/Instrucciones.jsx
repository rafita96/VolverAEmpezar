class Instrucciones extends React.Component {
	render() {
		var regresar;
        if(typeof this.props.regresar === 'undefined'){
            regresar = (
                <div className="col-4">
                    <a
                        className="btn btn-principal btn-lg" 
                        href="/juegos/">
                        Lista de juegos
                    </a>
                </div>
            );
        }else{
            regresar = (
                <div className="col-4"></div>
            );
        }
		return (
			<div>
				<div className="row border rounder my-3">
					<div className="col-12 text-justify bg-white">
						<p>{this.props.instrucciones}</p>
					</div>
				</div>

				<div className="row">
					{regresar}
					<div className="col-4 text-center">
						<button 
							className="btn btn-principal btn-lg"
							onClick={this.props.iniciar}>
							Iniciar Juego
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Instrucciones;