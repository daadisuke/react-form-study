import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(register);

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register('email',{ required: true })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register('password')}
              type="password"
          />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
