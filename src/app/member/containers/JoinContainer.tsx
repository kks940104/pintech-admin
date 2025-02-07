'use client'
import React, { useState, useCallback, useActionState } from 'react'
import { useSearchParams } from 'next/navigation' // 쿼리스트링 값이 들어가있음
import JoinForm from '../components/JoinForm'
import { processJoin } from '../services/actions'

const JoinContainer = () => {
  const searchParams = useSearchParams()
  const params = { redirectUrl: searchParams.get('redirectUrl') }
  const actionState = useActionState(processJoin, params)
  const [form, setForm] = useState({
    gender: 'MALE', // 초기에 선택이 되어야 하는건 기본값으로 넣어주기
  })

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  const onClick = useCallback((field, value) => {
    setForm((form) => ({ ...form, [field]: value }))
  }, [])

  const onSelectDate = useCallback((date) => {
    setForm((form) => ({ ...form, birthDt: date }))
  }, [])

  return (
    <JoinForm
      actionState={actionState}
      form={form}
      onChange={onChange}
      onClick={onClick}
      onSelectDate={onSelectDate}
    />
  )
}

export default React.memo(JoinContainer)
