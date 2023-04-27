const ComponentWithProps = ({salutation, name, colour, evil}) => {
  const message = "Hello World!";
return(
  <>
    <h1>{salutation}</h1>
    <p>{name}</p>
    <p> This is the colour: {colour}, isEvil: {evil}</p>
    <p> This is a message delivered without props: {message}</p>
  </>
);
};

export default ComponentWithProps;