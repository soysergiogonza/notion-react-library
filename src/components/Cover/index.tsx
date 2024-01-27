import Image from 'next/image';

import {CoverSource} from '~/interfaces';

import styles from './Cover.module.css';

export const Cover = ({coverSource, style}: CoverSource) => {
	return (
		<picture className={styles.picture} style={style}>
		<Image src={coverSource} alt="cover" width={100}
		       height={100} className={styles.cover} />
		</picture>
	);
};