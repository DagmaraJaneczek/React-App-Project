import styles from './Column.module.scss';

const Column = props =>{
    return (
        <artickle className={styles.column}>
            <h2 className={styles.title}>
                <span className={styles.icon + 'fa fa-' + props.icon} />
                {props.title}</h2>
        </artickle>
    );
};

export default Column;