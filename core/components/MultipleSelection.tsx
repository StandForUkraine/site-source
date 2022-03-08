import { useText } from 'core/utils/lang'
import Chip from './Chip'
import ChipsWrapper from './ChipsWrapper'
import FilterLabel from './FilterLabel'

export interface MultipleSelectionProps<T extends string> {
  title: string
  allOptions: T[]
  selectedOptions: T[]
  onOptionClick: (value: T) => any
  toLabel?: (value: T) => string
}

export default function MultipleSelection<T extends string>({
  title,
  allOptions,
  selectedOptions,
  onOptionClick,
  toLabel,
}: MultipleSelectionProps<T>) {
  const t: any = toLabel || useText() // it's dirty, but I'm too lazy

  return (
    <ChipsWrapper>
      <FilterLabel>{title}</FilterLabel>
      {allOptions.map((option) => (
        <Chip
          key={option}
          isActive={selectedOptions.indexOf(option) >= 0}
          onClick={() => onOptionClick(option)}
        >
          {t(option)}
        </Chip>
      ))}
    </ChipsWrapper>
  )
}
