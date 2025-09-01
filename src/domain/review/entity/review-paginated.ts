export type ReviewData = {
    id: number;
    name_user: string;
    url_image_user: string;
    message: string;
    rating: number;
    created_at: Date;
}

export type PaginatedReviews = {
    data: ReviewData[];
    metadata: {
        current_page: number;
        next_page: boolean;
        size_page: number;
    }
}