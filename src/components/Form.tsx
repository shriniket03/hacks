import DateForm from './DateForm'
import CoinForm from './CoinForm'
import AccForm from './AccForm'

interface props {
  type: string;
}

const Form: React.FC<props> = ({ type }: props) => {
  if (type === `Date`) {
    return <DateForm/>;
  } else if (type === `Account`) {
    return <AccForm/>;
  } else if (type === `Coin`) {
    return <CoinForm/>;
  } else {
    return null;
  }
};

export default Form;
