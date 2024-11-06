import * as express from require('express');
import * as cors from require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

// Your routes and server setup
app.listen(8000, () => {
  console.log('Server running on http://127.0.0.1:8000');
});
