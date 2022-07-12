type TypePhotoCollection = {
	src: string;
	key: string;
};

export interface IAdapterCollection {
	totalPhotos: number;
	title: string;
	photos: TypePhotoCollection[];
	id: string;
	shareKey: string;
	description: string | '';
}

export function AdapterCollections(objApiCollections: any): IAdapterCollection {
	return {
		totalPhotos: objApiCollections.total_photos,
		title: objApiCollections.title,
		photos: objApiCollections.preview_photos.map((img: any) => {
			return {
				src: img.urls.regular,
				key: img.blur_hash,
			};
		}),
		id: objApiCollections.id,
		shareKey: objApiCollections.share_key,
		description: objApiCollections.description || '',
	};
}
