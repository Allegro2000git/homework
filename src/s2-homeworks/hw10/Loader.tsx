import s from './Loader.module.css';
import Loading1 from './images/Loading1.svg';
import Loading2 from './images/Loading2.svg';
import Loading3 from './images/Loading3.svg';
import Loading4 from './images/Loading4.svg';

export const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={Loading1} alt="Loading stage 1" className={s.stage} />
            <img src={Loading2} alt="Loading stage 2" className={s.stage} />
            <img src={Loading3} alt="Loading stage 3" className={s.stage} />
            <img src={Loading4} alt="Loading stage 4" className={s.stage} />
        </div>
    );
};