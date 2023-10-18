/*const SolutionLetters = ({ word, userLetters }) => {
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const newLetter = userLetters.includes(letter);
      return (
        <li className='letter' key={index}>
          {newLetter ? letter : ''}
        </li>
      );
    });
  };

  return (
    <div className='solution'>
      <h2 className='title'>Solución:</h2>
      <ul className='letters'>{renderSolutionLetters()}</ul>
    </div>
  );
};
export default SolutionLetters;*/
