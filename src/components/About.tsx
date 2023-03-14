import { Component, ReactNode } from "react";
import {ReactComponent as Profile} from './profile.svg'
import './style.css'

export default class About extends Component{
    render(): ReactNode {
        return <div>
            <h1>Történet</h1>
            <p>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
            <p>2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p>

            <h2>Jelenlegi tagjaink</h2>

            <div>
                <div className="card flex-row">
                  <div className="card-body">
                    <h4 className="card-text"> Erdős Ildikó</h4>
                    </div>           
                    <img className="card-img-right example-card-img-responsive "     src={require('./profile.png')} alt="Fotó a főnökről"  />
                </div>
            
                <div className="card flex-row">
                  <div className="card-body">
                    <h4 className="card-text"> Jónás Viola</h4>
                    </div>           
                    <img className="card-img-right example-card-img-responsive "     src={require('./profile.png')} alt="Fotó a főnökről"  />
                </div>
                <div className="card flex-row">
                  <div className="card-body">
                    <h4 className="card-text"> Kató Anna</h4>
                    </div>           
                    <img className="card-img-right example-card-img-responsive "     src={require('./profile.png')} alt="Fotó a főnökről"  />
                </div>
                <div className="card flex-row">
                  <div className="card-body">
                    <h4 className="card-text"> Pintér Koppány</h4>
                    </div>           
                    <img className="card-img-right example-card-img-responsive "     src={require('./profile.png')} alt="Fotó a főnökről"  />
                </div>
                <div className="card flex-row">
                  <div className="card-body">
                    <h4 className="card-text"> Sas Gizi</h4>
                    </div>           
                    <img className="card-img-right example-card-img-responsive "     src={require('./profile.png')} alt="Fotó a főnökről"  />
                </div>
            </div>
        </div>
    }
}