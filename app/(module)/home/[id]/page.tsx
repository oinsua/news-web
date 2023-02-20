import classNames from 'classnames';
import React from 'react'
import styles from './details.module.css'

type props = {
    params: {
        id: string;
    }
};

export default function Details({params}:props) {
    const { id } = params

  return (
    <>
        <div>Details {id}</div>
    </>
  )
}
