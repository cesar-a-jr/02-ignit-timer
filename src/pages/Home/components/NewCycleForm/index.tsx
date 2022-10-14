import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { cyclesReducer } from '../../../../reducers/cycles/reducer'

export function NewCycleForm() {
  const { cycles } = useContext(CyclesContext)
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalha em</label>
      <TaskInput
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        id="task"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        {cycles.map((cycle) => {
          return <option key={cycle.id} value={cycle.task}></option>
        })}
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={0}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
