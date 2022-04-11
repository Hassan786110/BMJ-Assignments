import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./component.module.css";
import error from "../images/error.png";
import Find from "../store/action/action";

const GithubUserFinder = () => {
  const state = useSelector((store) => store.reducer);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  const inputHandler = (e) => {
    e.preventDefault();
    setUser(input);
  }
  useEffect(() => {
    dispatch(Find({ user }));
    setInput("");
  }, [user])
  return (
    <div className={style.mainBox}>
      {state.Loader ? (
        <div className={style.loadingContainer}>
          Loading....
        </div>
      ) : (
        <div className={style.Cntainer}>
          <h2 className={style.hading}>Github User Finder</h2>
          {state.Error ? (
            <div className={style.subContainer}>
              <img src={error} width="100%" height="100%" style={{ borderRadius: "10px" }} />
            </div>
          ) : (
            <div className={style.subContainer}>
              <img src={state.User.avatar_url} width="50%" height="100%" />
              <div>
                <h2>Details</h2>
                <li className={style.list}>Name: {state.User.name}</li>
                <li className={style.list}>Followers: {state.User.followers}</li>
                <li className={style.list}>Following: {state.User.following}</li>
                <li className={style.list}>Public Repositories: {state.User.public_repos}</li>
              </div>
            </div>
          )}
          <form onSubmit={(e) => inputHandler(e)} className={style.frm}>
            <input type="text"
              placeholder='UserName'
              autoComplete='off'
              value={input}
              onChange={(e) => setInput(e.target.value)} />
          </form>
        </div>
      )}
    </div>
  )
}

export default GithubUserFinder
