import CommentData from './CommentData';
// import axios from 'axios';

export default class CommentApi {
static getAllComments() {
 return CommentData.comments;
} 
}