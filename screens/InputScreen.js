import NumberInput from '../components/NumberInput';
import Title from '../components/Title';

export default function InputScreen({ onNumberInput }) {
  return (
    <>
      <Title>Guess My Number</Title>
      <NumberInput onNumberInput={onNumberInput} />
    </>
  );
}