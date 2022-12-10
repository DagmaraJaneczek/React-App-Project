import styles from './Column.module.scss';

const Column = props =>{
    return (
        <artickle className={styles.column}>
            <h2 className={styles.title}>{props.title}</h2>
        </artickle>
    );
};

export default Column;