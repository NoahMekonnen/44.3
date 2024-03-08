const Person = (props) =>{
    let response;
    let name;
    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    if (props.age >18){
        response = "please go vote!"
    }else{
        response = "you must be 18"
    }
    if (props.name.length > 8 ){
        name = name.substring(0,6)
    }else{
        name = props.name
    }
    return <div>
        <p>Learn some information about this person</p>
        <h1>Your name is {props.name} and your age is {props.age}</h1>
        <h3>Your hobbies are:</h3>
        <ul>{hobbies}</ul>
        </div>
}