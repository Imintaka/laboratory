import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren

export function Container({ children }: ContainerProps) {
  return <div className={'mx-auto w-full max-w-6xl px-4'}>{children}</div>
}
