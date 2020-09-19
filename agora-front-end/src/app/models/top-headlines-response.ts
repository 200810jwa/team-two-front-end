import { Article } from './Article';

export class TopHeadlinesResponse {
    public status: string;
    public totalResults: number;
    public articles: Article[];
}
