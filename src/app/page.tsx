import styles from './page.module.css';
import {Cover} from '../components';

export default function Home() {
	return (
		<main className={styles.main}>
			<section>
					<Cover coverSource="/notion-react-library.svg" />
			</section>
		</main>
	);
}
