import React, { ChangeEvent, FormEvent } from 'react'
import { ErrorMessage } from '../../../../components/ErrorMessage'
import { ICommentBody } from '../../../../types/actions'
import s from './index.module.scss'

interface IProps {
  postComment: (op: ICommentBody) => void;
  id: string;
}

export const CommentForm: React.FC<IProps> = ({
  postComment,
  id,
}) => {

  const [name, setName] = React.useState('')
  const [comment, setComment] = React.useState('')
  const [validMessage, setValidMessage] = React.useState('')

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    if (e.target.tagName === 'INPUT') {
      setName(target.value)

    } else {
      setComment(target.value)
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name && comment) {
      postComment({ id, name, comment })
      validMessage && setValidMessage('')

    } else {
      !validMessage && setValidMessage('Для отправки комментария необходимо ввести Имя и Комментарий')
    }

  }

  return (
    <div className={s.wrap}>
      <ErrorMessage message={validMessage} />
      <form
        className={s.form}
        onSubmit={onSubmit}>
        <h2>Введите комментарий!</h2>
        <input
          type="text"
          value={name}
          onChange={onChange} />
        <textarea
          value={comment}
          onChange={onChange} />
        <button
          type="submit">отправить</button>
      </form>
    </div>
  )
}
