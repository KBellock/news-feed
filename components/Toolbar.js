import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>All News</div>
            <div onClick={() => router.push('/bitcoin/1')}>Bitcoin</div>
            <div onClick={() => router.push('/ufo/1')}>UFOs</div>
            <div onClick={() => router.push('/surfing/1')}>Surfing</div>
        </div>
    )
};