import styles from './Card.module.scss';
import { removeCard, toggleCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux'
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const toggleFavorite = () => {
        dispatch(toggleCard(id))
    };

    const remove = () => {
      dispatch(removeCard(id));
    }

    return (
      <li className={styles.card}>{title}
        <div>
          <button onClick={toggleFavorite} className={clsx(styles.star_btn, isFavorite && styles.active)}>
            <span className='fa fa-star-o'></span>
          </button>
          <button onClick={remove} className={clsx(styles.remove_btn, isFavorite && styles.active)}>
            <span className='fa fa-trash'></span>
          </button>
        </div>
      </li>
    );
};

export default Card;