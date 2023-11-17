import style from "./index.module.scss";

const Form = () => {
  return (
    <form className={style.form}>
        <input className={style.inp} placeholder='search'/>
        <button className={style.btn}>submit</button>
    </form>
  )
}

export default Form