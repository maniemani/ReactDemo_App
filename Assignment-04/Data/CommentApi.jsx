// import CommentData from './CommentData';
import axios from 'axios';
import {nanoid} from 'nanoid';

export default class CommentApi {
    static async getAllComments() {

        try {
            console.log('getAllComments');
            const response = await axios.get('http://localhost:3000/comments');
            return response.data;
        }catch (error) {
            console.error('getAllComments error:${error.message}');
            throw error;
        }
    }
    static async saveComment(comment) {
    try {
        const commentWithId = { ...comment, id: nanoid() }; // Add generated id
        const response = await axios.post('http://localhost:3000/comments', commentWithId);
        return response.data;
    } catch (error) {
        console.error(`saveComment error: ${error.message}`);
        throw error;
    }
  }
    static async deleteComment(id) {
        try {
            const response = await axios.delete(`http://localhost:3000/comments/${id}`);
            return response.data;
        } catch (error) {
            console.error(`deleteComment error: ${error.message}`);
            throw error;
        }
    }
}

