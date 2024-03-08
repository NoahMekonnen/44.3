const Tweet = (props) =>(
    <div class="tweet">
    <h2>{props.name}'s Tweet</h2>
    <p>{props.message}</p>
    <h6>This was tweeted by {props.username} at {props.date}</h6>
    </div>
)