import { TypeIconsProps } from '~interfaces/icons.types';

const CheckIcon = ({ width, height, color, styles }: TypeIconsProps) => {
	return (
		<svg
			className={styles}
			width={width}
			height={height}
			data-darkreader-inline-stroke=''
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				color={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M5 13l4 4L19 7'
			/>
		</svg>
	);
};

export default CheckIcon;
