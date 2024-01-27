import {Cover} from '../components';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
					<Cover coverSource="/notion-react-library.svg" />
			</section>
		</main>
	);
}
