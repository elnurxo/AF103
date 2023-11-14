import PropTypes from "prop-types";

const Hello = ({ person, hobbies, func }) => {
  func(person.name);
  return (
    <>
      <h2>
        Hello {person.name} {person.surname}, {person.age}
      </h2>
      <ul>
        {hobbies &&
          hobbies.map((hobby, idx) => {
            return <li key={idx}>{hobby}</li>;
          })}
      </ul>
    </>
  );
};

Hello.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
  hobbies: PropTypes.array,
  func: PropTypes.func
};

export default Hello;
