import styles from './page.module.css';
import {Cover, IconPage} from '../components';

export default function Home() {
	return (
		<main className={styles.main}>
			<Cover coverSource="/notion-react-library.svg" style={{display: 'block', width: '100px', height: '100px'}}/>
			<picture style={{display: 'block', width: '100px', height: '100px'}}>
				<IconPage iconSource="notion-react-library_icon.svg"/>
			</picture>
		
		</main>
	);
}
