// import CommentData from './CommentData';
import axios from 'axios';

export default class CommentApi {
    static async getAllComments() {
        // return CommentData.comments;
        // http.get('http://localhost:3000/comments')
        try {
            console.log('getAllComments');
            const response = await axios.get('http://localhost:3000/comments');
            return response.data;
        }catch (error) {
            console.error('getAllComments error:${error.message}');
            throw error;
        }
    }
}