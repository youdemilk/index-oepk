import {FC} from "react";
import {InputDataItem} from "../../App";
import {Input} from "../Input";

type InputListProps = {
  data: InputDataItem[]
}

export const InputList: FC<InputListProps> = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((input) => {
        const { id, name, value, setValue } = input;

        return (
          <Input key={id} label={name} value={value} onChange={(event) => setValue(Number(event.target.value))} />
        )
      })}
    </div>
  )
}
