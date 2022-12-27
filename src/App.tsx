import {Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import {InputList} from "./components/InputList";
import {Input} from "./components/Input";

export type InputDataItem = {
  id: number;
  name: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<number>>
  value: number;
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

  const data: InputDataItem[] = [
    {
      id: 0,
      name: 'x',
      placeholder: 'Количество подпищиков',
      setValue: setX,
      value: x,
    },
    {
      id: 1,
      name: 'y',
      placeholder: 'Численность населения территориальной единицы',
      setValue: setY,
      value: y,
    },
    {
      id: 2,
      name: 'w',
      placeholder: 'Количество просмотров записей в сообществе',
      setValue: setW,
      value: w,
    },
    {
      id: 3,
      name: 'G',
      placeholder: 'Количество видов социальных медиа, в которых представлен государственный орган',
      setValue: setG,
      value: g,
    },
    {
      id: 4,
      name: 'H',
      placeholder: 'Количество комментариев',
      setValue: setH,
      value: h,
    },
    {
      id: 5,
      name: 'L',
      placeholder: 'Количество оценок записей сообщества',
      setValue: setL,
      value: l,
    },
    {
      id: 6,
      name: 'B',
      placeholder: 'Количество публикаций в день',
      setValue: setB,
      value: b,
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
      <Input label={'E'} placeholder={'E'} value={result} disabled />
    </div>
  )
}

export default App;
