function Quote(props) {
  return (
    <div className="Quote">
        <p>
            {props.quote}
        </p>
        <span>{props.author}</span>
    </div>
  );
}

export default Quote;
