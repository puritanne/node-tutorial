import React from 'react';
import ImageListItem from './image_list_item';


const ImageList = (props) => {

	const imageItems = props.images.map((image) => {
		return (
				<ImageListItem 
					onImageClick={props.onImageClick}
					image = {image} 
					key = {image.id}/>
			)
	});

	return (
		<ul>
			{imageItems}
		</ul>
	);
}

export default ImageList;