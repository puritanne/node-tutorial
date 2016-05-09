import React from 'react';

const ImageListItem = (props) => {
	const imageUrl = props.image.fields.picture;

	return (
			<li onClick={() => props.onImageClick(props.image)}>
				<img src={imageUrl} />
			</li>
		)
};

export default ImageListItem;