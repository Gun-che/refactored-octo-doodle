import React from 'react'
import s from './index.module.scss'
import { ICommentBody } from '../../../../types/actions'
import { useParams } from 'react-router'
import { IStateItem } from '../../../../types/state'
import { LoadingThin } from '../../../../components/Loading'

interface IProps {
  getItem: (n: number) => void;
  postComment: (op: ICommentBody) => void;
  current: IStateItem;
}

export const Item: React.FC<IProps> = ({
  getItem,
  postComment,
  current,
}) => {

  const { id } = useParams();

  console.log(current.data)

  React.useEffect(() => {
    getItem(id)
  }, [id])

  const tmp = () => {
    return current.isFetching ? <LoadingThin /> :
      (<div>
        <img src={current.data.url} alt="" />
      </div>)
  }

  return (
    <div className={s.item}>
      {tmp()}
    </div>
  )
}
