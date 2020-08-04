import { CommentEntity } from '../../comment/comment.entity';
import { StatusEntity } from '../../status/status.entity';

export const SHOW_COMMENT = {
  comments: [],
  marks: [],
  hasvisible: false,
  previous_cursor: 0,
  next_cursor: 3627802056659451,
  previous_cursor_str: '0',
  next_cursor_str: '3627802056659451',
  total_number: 184,
  since_id: 0,
  max_id: 3627802056659451,
  since_id_str: '0',
  max_id_str: '3627802056659451',
  status: {}
};

export interface ShowCommentParams {
  id: number;
  count: number;
  page: number;
}

export async function showComments({ id, count, page }: ShowCommentParams) {
  const result = {
    ...SHOW_COMMENT,
    comments: await CommentEntity.find({ where: { 'status.id': id } }),
    status: await StatusEntity.findOne({ id })
  };
  result.total_number = result.comments.length;
  return result;
}
