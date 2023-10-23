import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d307738f94d7c0f2aae33c01c389db49.jpeg?x-expires=1698238800&x-signature=KWP5sGCx7ucOzm17kTRLhwiiv6g%3D"
                alt="Account"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quocviethoang</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Việt Hoàng</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
