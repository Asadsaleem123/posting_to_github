import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='flex flex-wrap justify-center mt-20'>
        <div className='w-full max-w-sm'>
          <form action=""className='shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-5'>
              <label htmlFor=''className='block text-gray-700 text-sm font-bold mb-2'>
                username
              </label>
              <input type="text"className='shadow appearance-none border rounded w-full py-2 p'placeholder='username'/>
            </div>
            <div className='mb-5'>
              <label htmlFor='password'className='block text-gray-700 text-sm font-bold mb-2'>
                username
              </label>
              <input type="text"className='shadow appearance-none border rounded w-full py-2 p'placeholder='username'/>
            </div>
            <div className='flex items-center justify-between'>
              <button className='bg-blue-500.hover:bg-blue-700.text-white.font-bold.py-2.px-4.rounded.focus:outline-none.focus:shadow-outline.focus'></button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
