import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        <Link href="/axis">Axis</Link>
      </p>
    </main>
  );
}
