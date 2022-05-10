import React from 'react' 

class Square extends React.Component {
    constructor(props){
        super (props)
        this.state = {
            color: ["red", "orange", "green", "blue", "yellow"],
            currentColor: 0
        }
    }
         
    colorChanger = () => {
        for (let i = 0; i< this.state.color.length; i++){
            this.setState({color:this.state.color[1]})
        }
    }
    render(){
        return(
            <>
            <div style = {{ height:"150px",width:"150px",border:"4px solid black", backgroundColor:this.state.color}}
            onClick = {this.colorChanger}></div>
            </>
    )
}
}  
export default Square