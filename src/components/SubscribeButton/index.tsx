import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import style from './styles.module.scss'

interface SubcribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubcribeButtonProps) {
  const [session] = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId: sessionId })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <button
      type="button"
      className={style.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe
    </button>
  )
}
