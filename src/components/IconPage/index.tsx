import Image from 'next/image';

import {IconSource} from '~/interfaces';

import styles from './IconPage.module.css';

export const IconPage = ({iconSource, style}: IconSource) => {
	return (
		<Image src={iconSource} alt="icon" width={100}
		       height={100} className={styles.iconPage} style={style}/>
	);
};