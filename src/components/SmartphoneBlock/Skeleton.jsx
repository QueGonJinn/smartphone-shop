import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		className="smartphone-block"
		speed={2}
		width={280}
		height={555}
		viewBox="0 0 280 555"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="210" rx="10" ry="10" width="280" height="88" />
		<rect x="0" y="160" rx="10" ry="10" width="280" height="27" />
		<rect x="0" y="299" rx="10" ry="10" width="280" height="186" />
		<rect x="80" y="5" rx="10" ry="10" width="120" height="153" />
		<rect x="0" y="515" rx="10" ry="10" width="110" height="28" />
		<rect x="124" y="504" rx="15" ry="15" width="160" height="45" />
	</ContentLoader>
);

export default Skeleton;
