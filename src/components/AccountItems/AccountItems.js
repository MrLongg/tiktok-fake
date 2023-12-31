import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItems({ data }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.hoaahanassii}</span>
            </div>
        </Link>
    );
}

AccountItems.prototype = {
    data: PropTypes.object.isRequired,
};

export default AccountItems;
