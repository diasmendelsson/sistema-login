

import classes from './form.module.css';

import { requestName } from '../lib/action';




export default function Form({ requestName }){


    return (


        <div className={classes.page}>
           
          <h1>Crie sua conta</h1>

          <form action={requestName} className={classes.form}>
          
            <div className={classes.boxli}>

             <div className={classes.boxLabel}>
              <label htmlFor="email">Email:</label>
             </div>
             
              <input className={classes.input}   type="email" name="email" required />
             
            </div>

            <div className={classes.boxli}>
            <div className={classes.boxLabel} >
              <label htmlFor="password">Senha:</label>
             </div>
             
              <input   className={classes.input}   type="password" name="password"  required minLength={6} />
             
            </div>

            <button className={classes.button} type='submit'>Criar conta</button>

          </form>

          
        </div>
    )
}