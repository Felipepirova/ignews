import style from './styles.module.scss'

interface SubcribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubcribeButtonProps) {
  return (
    <button type="button" className={style.subscribeButton}>
      Subscribe
    </button>
  )
}
