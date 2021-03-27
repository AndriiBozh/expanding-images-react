function ImageContainer(props) {
  return (
    <div
      className={props.class}
      id={props.id}
      style={props.backgroundImg}
      onClick={props.handleClick}
    >
      <h2>{props.title}</h2>
    </div>
  );
}

export default ImageContainer;
