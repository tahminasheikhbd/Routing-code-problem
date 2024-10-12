/** @format */

export const Counter = ({ count, setCount }) => {
  return (
    <div className='flex gap-4 items-center'>
      <button
        type='button'
        className='grid place-items-center size-12 bg-purple-800 text-white font-bold text-2xl'
        onClick={() => {
          setCount(count - 1);
        }}>
        -
      </button>
      <span className='font-bold text-2xl '>{count}</span>
      <button
        type='button'
        className='grid place-items-center size-12 bg-purple-800 text-white font-bold text-2xl'
        onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
