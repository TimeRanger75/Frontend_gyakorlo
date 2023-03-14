import { Component, ReactNode } from "react";
import { Alert } from "react-bootstrap";

interface State{
    email:string;
    city:string;
    name:string;
}

class App extends Component<{}, State>{
    constructor(props:{}){
        super(props)
        this.state={
            email:"",
            name:"",
            city:""
        }
    }

thanks=()=>{
   alert("Köszönjük")
this.setState({
    city:"",
    name:"",
    email:""
})
    
}
    render(): ReactNode {
        const{email, name, city}=this.state;
        return <div>
            <h1>Lépjen velünk kapcsolatba</h1>
            <div>
                <form>
                Email cím <br />
                <input type="email" value={email} onChange={e=> this.setState({email:e.currentTarget.value})}required/> <br />
                Név <br/>
                <input type="text" value={name} onChange={e=>this.setState({name:e.currentTarget.value})} required/> <br />
                Város <br />
                <input type="text"  value={city} onChange={e=>this.setState({city:e.currentTarget.value})} required/> <br />
                <button onClick={this.thanks}>Küldés</button>
                </form>
            </div>
        </div>
    }
}

export default App;