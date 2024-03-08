const App = () => (
    <div>
        <Person name="Bob" age={29} hobbies={["walking the dog", "cooking food", "playing chess"]} />
        <Person name="Dylan" age={17} hobbies={["watching football", "playing basketball"]} />
        <Person name="Giovanni" age={26} hobbies={["watching true faith tv","praying the rosary"]} />
    </div>
)

ReactDOM.render(<App/>,document.getElementById("root"))