import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ to, href, children, onClick }) {
    let Comp = 'button';
    const classes = cx('wrapper');
    return (
        <Comp classNames={cx('testing')}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
