import React from 'react'
import s from './index.module.scss'
import { ICommentBody } from '../../../../types/actions'
import { useHistory, useParams } from 'react-router'
import { IStateItem } from '../../../../types/state'
import { LoadingThin } from '../../../../components/Loading'
import { ErrorMessage } from '../../../../components/ErrorMessage'
import { CommentForm } from '../CommentForm'

interface IProps {
  getItem: (n: string) => void;
  postComment: (op: ICommentBody) => void;
  current: IStateItem;
}

export const Item: React.FC<IProps> = ({
  getItem,
  postComment,
  current,
}) => {

  const { id } = useParams() as { id: string };
  const history = useHistory();

  console.log(current.data)

  React.useEffect(() => {
    getItem(id)
  }, [id, getItem])

  const tmp = () => {
    return current.isFetching ? <LoadingThin /> :
      (<div>
        <ErrorMessage message={current.message} err={false} />
        <div className={s.img}>
          <img src={current.data.url} alt="" />
        </div>
        <div className={s.comments}>
          {current.data.comments.length ? current.data.comments.map(i => {
            return (
              <div className={s.com} key={i.id}>
                <p>
                  <strong>{new Date(i.date).toLocaleDateString()}</strong>
                </p>
                <p>{i.text}</p>
              </div>
            )
          }) : <h2>Нет комментариев. Введите первый!</h2>}
        </div>
      </div>)
  }

  const onPrevPage = () => {
    history.push(`${process.env.PUBLIC_URL}/`)
  }

  return (
    <div className={s.item}>
      {tmp()}
      <CommentForm postComment={postComment} id={id} />
      <button onClick={onPrevPage}>назад</button>
    </div>
  )
}
