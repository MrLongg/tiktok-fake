import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cbd29a6ced319dd5ef121cb0b680b4cd~c5_300x300.webp?x-expires=1697511600&x-signature=VrLHhpd1o%2BwVJ7eKPDPHWcXGzwg%3D"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvanA</span>
            </div>
        </div>
    );
}

export default AccountItems;
