import { pool } from './connection';
import axios from 'axios';


export async function sqlCreateUser(username, password) {
  const client = await pool.connect();
  
  
  try {
    await client.query(
      `INSERT INTO users (username, password) VALUES ('${username}','${password}')`
    );
    console.log('yes');
  } catch (err) {
    console.log(err);
  }
  console.log('yeet')  
  
  client.query(`INSERT INTO users (username, password) VALUES ('${username}','${password}')`)
  .then(() => {
    console.log('i am');
  })
  .catch(err => {
    console.log(err);
  })
  
  console.log('yeet')

}

export async function sqlGetUser(username) {
  const client = await pool.connect();
  try {
    return (
      await client.query(`SELECT * from users where username = '${username}'`)
    ).rows[0];
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    client.release();
  }
}