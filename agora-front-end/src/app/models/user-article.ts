import { User } from './User';

export class UserArticle {
    public article_id: number;
    public user: User;
    public title: string;
    public description: string;
    public image;
    public publishedAt: Date;
    public content: string;
    public status: number;
}
