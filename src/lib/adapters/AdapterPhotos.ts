import { TypeAdapterPhotos } from '~interfaces/photos.types';

export function AdapterPhotos(objApiPhotos: any): TypeAdapterPhotos {
	const user = objApiPhotos.user;
	const images = objApiPhotos.urls;

	return {
		id: objApiPhotos.id,
		likes: objApiPhotos.likes,
		images: {
			small: images.small,
			full: images.full,
			regular: images.regular,
		},
		user: {
			id: objApiPhotos.user.id,
			name: objApiPhotos.user.name,
			images: {
				small: user.profile_image.small,
				full: user.profile_image.large,
				regular: user.profile_image.medium,
			},
			bio: user.bio,
			likes: user.total_likes,
			photos: user.total_photos,
			username: user.username,
		},
	};
}