

const ShowTrainers = () => {

  const trainers = [
    {
      name: "Amelie",
      age: 33
    },
    {
      name: "Marcus",
      age: 25
    },
    {
      name: "Sally",
      age: 28
    },
    {
      name: "Jessi",
      age: 26
    }
  ];
  return (
  <>
    <h1>Printing a list of trainers:</h1>
    {trainers.map((trainer, index) => (
      <div key={index}>
        <ol>
          Name: {trainer.name}, Age: {trainer.age}
        </ol>
      </div>
    ))}
  </>
)};

export default ShowTrainers;