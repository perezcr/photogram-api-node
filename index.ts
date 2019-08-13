import Server from './classes/server';
import userRoutes from './routes/user';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server();

// Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Routes
server.app.use('/user', userRoutes);

// Set up mongoose connection
mongoose.connect('mongodb://localhost:27017/photogram', {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('error', err => {
  console.error(`🚫 → ${err.message}`);
});

// Start server
server.start(() => console.log(`Express running → PORT ${server.port} 🔥`));
