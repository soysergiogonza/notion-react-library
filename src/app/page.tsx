import {Cover, IconPage} from '../components';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<Cover
					source="/notion-react-library.svg"
					className={styles.cover}
					width={100}
					height={100}
				/>
				<IconPage
					source="/notion-react-library_icon.svg"
					className={styles.icon}
					width={100}
					height={100}
				/>
			</section>
		</main>
	);
}
