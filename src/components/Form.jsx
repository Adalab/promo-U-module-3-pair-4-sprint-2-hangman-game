const Form =( {handleLastLetter}) =>{
    const handleSubmit = (ev) => {
        ev.preventDefault();
      };
      const handleInputLetter=(ev)=>{
        handleLastLetter(ev.target.value);
      }
    return (
        <form className="form" onSubmit={handleSubmit}>
        <label className="title" htmlFor="last-letter">
          Escribe una letra:
        </label>
        <input
          autoComplete="off"
          className="form__input"
          maxLength="1"
          type="text"
          name="last-letter"
          id="last-letter"
          value={lastLetter}
          onChange={handleInputLetter}
        />
      </form>
    );
};
export default Form;