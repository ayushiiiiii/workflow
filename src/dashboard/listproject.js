import React ,{Component} from 'react';
import Cards from './cards';
import List from './listformat';



class Listitems extends Component{
    render(){
            const listt = [];
            // for(let i=0;i<this.props.projects.length;i++){
            
            //     listt.push(<List />);
            // }
            return(
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-sm bg-light justify-content-center ">&nbsp;&nbsp;&nbsp;&nbsp;
                    <center> <h1>Project list </h1> </center>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     */}
                     </nav>
                     <div className="col-12 col-sm-12 col-md-12">
                    <List />

                     </div>

                    </div>

        );
    }
}

export default  Listitems;