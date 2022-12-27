import {Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import {InputList} from "./components/InputList";
import {Input} from "./components/Input";

export type InputDataItem = {
  id: number;
  name: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>
}


function App() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [w, setW] = useState(0)
  const [g, setG] = useState(0)
  const [h, setH] = useState(0)
  const [l, setL] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)

  const data = [
    {
      id: 0,
      name: 'x - количество подпищиков',
      value: x,
      setValue: setX
    },
    {
      id: 1,
      name: 'y - численность населения территориальной единицы\n',
      value: y,
      setValue: setY
    },
    {
      id: 2,
      name: 'w - количество просмотров записей в сообществе\n',
      value: w,
      setValue: setW
    },
    {
      id: 3,
      name: 'G - количество видов социальных медиа, в которых представлен государственный орган\n',
      value: g,
      setValue: setG
    },
    {
      id: 4,
      name: 'H - количество комментариев\n',
      value: h,
      setValue: setH
    },
    {
      id: 5,
      name: 'L - количество оценок записей сообщества\n',
      value: l,
      setValue: setL
    },
    {
      id: 6,
      name: 'B - количество публикаций в день',
      value: b,
      setValue: setB
    },
  ];

  const onCalculate = () => {
    setResult((((((2 * x) / y) + ((100 * w) / (7 * x) + g / 3)) / 3) + (((500 * h) / x) + ((1000 * l) / x)) / 2 + (b / 3)) / 3)
  }

  return (
    <div className="my-4">
      <InputList data={data} />
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={onCalculate}
        >
          {'Рассчитать E'}
        </button>
      </div>
      <Input label={'E'} value={result} disabled />
    </div>
  )
}

export default App;
