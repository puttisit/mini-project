const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

// const mysql = require("mysql2/promise");
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travel',
    port: '3306'
});

// dbConn.connect(err => {
//     if (err) {
//         console.log('Error Conecting', err);
//         return;
//     }
//     console.log('Database Connected');
// });


// app.get('/profiles', async (req,res) => {
//     const connection = await dbConn;
//     const [rows] = await connection.query('SELECT * from profiles');
//     res.json(rows);
// })

app.get('/travels', async (req, res) => {
    try {
      const connection = await dbConn;
      const [rows] = await connection.query('SELECT * FROM attractions');
      res.send(rows);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });




app.post("/profiles/add", async (req, res) => {
    // ส่งข้อมูลผ่าน body-parser (Middleware)
    const name = req.body.name;
    const src = req.body.src;
    const alt = 'avatar_img';
    const tel = req.body.tel;
    const email = req.body.email;

    const connection = await dbConn
    const rows = await connection.query("insert into profiles (name,src,alt,tel,email) values('"+name+"','"+src+"','"+alt+"','"+tel+"','"+email+"')")
    res.status(201).send(rows)
})

// function getData() {
//     return data;
//   }
  
// const dataWithIds = data.map((item, index) => ({
//     id: index + 1,
//     ...item,
//   }));
  
//     console.log(dataWithIds);
  
// export default dataWithIds;
  
app.post('/travels/add', async (req, res) => {
    try {
      const { name, detail, coverimage, latitude, longitude } = req.body;
      
      const connection = await dbConn;
      const [rows] = await connection.query(
        'INSERT INTO attractions (name, detail, coverimage, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
        [name, detail, coverimage, latitude, longitude]
      );
      
      res.status(201).json({ message: 'Travel added successfully' });
    } catch (error) {
      console.error('Error adding travel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.delete('/travels/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const connection = await dbConn;
      const [rows] = await connection.query('DELETE FROM attractions WHERE id = ?', [id]);
  
      if (rows.affectedRows === 0) {
        return res.status(404).json({ message: 'Travel not found' });
      }
  
      res.json({ message: 'Travel deleted successfully' });
    } catch (error) {
      console.error('Error deleting travel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(3001, () => {
    console.log("Server is running at port 3001")
})